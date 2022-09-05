import "./index.css";
import { React, useEffect, useState } from "react";
import {
  useLocation,
  useParams,
  useNavigate,
  useHistory,
} from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import { UserNavigation } from "../../component/userNavbar/disabledMenu";
import { UserDashboardFooter } from "../../component/userDashboardFooter";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserCardNop,
  GetOrdersListByUserId,
  getUserCardDetail,
  installmentPayout,
  getRedirectUrlFrom3dsecure,
} from "../../redux/actions";
import { ReactComponent as Second } from "./svg/second.svg";
import { ReactComponent as Third } from "./svg/third.svg";
import { ReactComponent as Fourth } from "./svg/final.svg";
import { ReactComponent as Visa } from "./svg/cardType.svg";
import { ReactComponent as Master } from "./svg/master.svg";
import { Secure3D } from "./secure3d";
import { API } from "../../redux/config";
import { toast } from "react-toastify";

export function CheckOutNop() {
  const [isLoading, setLoading] = useState(false);
  const [msg, setMsg] = useState("Loading ...");

  console.log("isLoading", isLoading);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user_id, order_id, installment_payout_id, amount, currency } =
    JSON.parse(sessionStorage.getItem("userOrder")) || {
      user_id: null,
      order_id: null,
      installment_payout_id: null,
      amount: null,
    };

  // check is the installment paid already
  useEffect(async () => {
    await dispatch({type:'RESET_STORE'})
     
    await API.get(
      "installment-payout/isInstallmentPaid/" + installment_payout_id
    )
      .then(({ data }) => {
        if (data) {
          toast.error("Link is expired");
          navigate("/");
          return;
        }
      })
      .catch((err) => console.log(err));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect to detect refres
  useEffect(async () => {
    if (user_id == null) {
      setMsg("Your order transaction completed already");
      setTimeout(() => {
        navigate("/signin");
      });
    }
    // dispatch({type:''})

    // const unloadCallback = (event) => {
    //   event.preventDefault();

    //   event.returnValue = "";
    //   return "";
    // };

    // window.addEventListener("beforeunload", unloadCallback);
    // return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const order_detail = useSelector((state) =>
    state?.orderReducer?.orders?.user?.orderDetail?.find(
      (order) => order.id == order_id
    )
  );
  const user_detail = useSelector((state) => state?.orderReducer.orders.user);

  const card_detail = useSelector((state) => state?.userCardReducer.cardData);
  const isRedirectUrl = useSelector(
    (state) => state?.userCardReducer.isRedirect
  );
  const [isRedirect, setRedirect] = useState(isRedirectUrl);

  console.log("isRedirect", isRedirect);

  useEffect(() => {
    setRedirect(isRedirectUrl);
    console.log(isRedirectUrl, "isRedirectUrl");
    // if(isRedirect){
    //   setTimeout(()=>{

    //     navigate("/signIn")
    //   },5000)
    // }
  }, [isRedirectUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  const is_installment_payout = useSelector(
    (state) => state?.installmentReducer
  );
  // const card_detail = {};

  const [order, setOrder] = useState(order_detail);
  const [card, setCard] = useState(card_detail);
  const [addCard, setaddCard] = useState(false);
  const [expiry, setExpiry] = useState(null);
  const [cvc, setCvc] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [cardError, setcardError] = useState(null);
  const [isPaid, setPayment] = useState(is_installment_payout);

  // getting 3d secure redirect link from server
  const redirectLinkSecure = useSelector(
    (state) => state?.userCardReducer.redirectLink
  );
  const [redirectLink, setRedirectLink] = useState(redirectLinkSecure);
  useEffect(() => {
    setRedirectLink(redirectLinkSecure);
  }, [redirectLinkSecure]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(async () => {
    await dispatch(GetOrdersListByUserId(user_id));
    await dispatch(getUserCardDetail(user_id));
    await dispatch(GetOrdersListByUserId(user_id));
    // console.log(user_detail,"user_detail")
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setPayment(is_installment_payout?.isPaid);
  }, [is_installment_payout?.isPaid]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const x = order_detail?.installmentPayout.sort((a, b) =>
      new Date(a.due_date) > new Date(b.due_date) ? 1 : -1
    );
    // console.log(x,"xxxxxxxxxxxxxxxx")
    setOrder({ ...order_detail, installmentPayout: x });
  }, [order_detail]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setCard(card_detail);
  }, [card_detail]); // eslint-disable-line react-hooks/exhaustive-deps

  const setExpiryDate = (value) => {
    if (value.length > 5) return;
    if (value.length == 2) {
      value = value.replaceAll("/", "");
      value = value + "/";
      setExpiry(value);
    }
    if (value.length < 2) {
      value = value.replaceAll("/", "");
    }
    setExpiry(value);
    if (value.length == 5) {
      document.getElementById("cvc").focus();
    }
  };

  const keyHandler = (e) => {
    if (e.keyCode == 8 && expiry.length == 3) {
      setExpiry(expiry.replaceAll("/", ""));
    }
  };

  const setCvcNumber = (value) => {
    if (value.length > 3) return;
    setCvc(value);
  };

  function validateCreditCardNumber(ccNum) {
    // Store the regexes as globals so they're cached and not re-parsed on every call:
    var visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastPattern = /^(?:5[1-5][0-9]{14})$/;

    var isVisa = visaPattern.test(ccNum) == true;
    var isMast = mastPattern.test(ccNum) == true;

    if (isVisa || isMast) {
      return true;
    } else {
      setcardError("Please enter valid card number");
    }
  }

  const setUserCardNumber = (value) => {
    if (value.length < 17) {
      setCardNumber(value);
      validateCreditCardNumber(value);
      if (value.length == 16) {
        document.getElementById("expiry").focus();
        if (validateCreditCardNumber(value)) {
          setcardError(null);
          return;
        }
      }
    }
  };

  const paynow = async () => {
    setLoading(true);
    if (!card?.token) {
      // we check that if the user add card details then we have to add card first then retrive the token and pay the installment
      const card_detail = {
        user_id: Number(user_id),
        card_number: cardNumber,
        cvv: cvc,
        expiry_month: expiry.split("/")[0],
        expiry_year: expiry.split("/")[1],
        isPrimary: "1",
        isForPayment: "1",
        card_holder_name: user_detail.first_name,
      };
      await dispatch(addUserCardNop(card_detail));
    }

    // if the card already exist we only dispatch an action to get payment
    // const firstInstallment = {
    //   user_id: Number(user_id),
    //   email: user_detail.email,
    //   installment_id: order?.installmentPayout[0]?.id,
    //   amount: order?.installmentPayout[0]?.installment_amount,
    // };

    // await dispatch(installmentPayout(firstInstallment));

    console.log(card?.id, "Number(card?.id)");
    let userinfo = {
      user_id: Number(user_id),
      currency,
      amount,
      card_id: Number(card?.id) || sessionStorage.getItem("card_id_local"),
      installment_id: order?.installmentPayout[0]?.id,
      order_id,
    };

    await dispatch(getRedirectUrlFrom3dsecure(userinfo));
    
    setLoading(false);
  };

  return (
    <div className="bodySegment">
      <UserNavigation />
      {redirectLink && <Secure3D show={true} link={redirectLink} />}
      {order?.id ? (
        <Container style={{ marginTop: "62px" }} className="checkoutNopMobile">
          {isPaid ? null : (
            <Row>
              <Col lg={3} className="offset-2">
                {order?.itemDetail?.map((item) => (
                  <div className="checkOutProduct mb-3">
                    <div className="checkOutProductDetail">
                      <div
                        className="checkOuttitle"
                        style={{ marginLeft: "16px" }}
                      >
                        {item?.item_name}
                      </div>

                      <div className="d-flex mb-3">
                        <div className="productImg">
                          <img
                            style={{ width: "100%", height: "100%" }}
                            src={item?.item_image_url}
                            alt="shopImg"
                          />
                        </div>

                        <div className="d-flex flex-column prodDescription">
                          <div>
                            Size:{" "}
                            {item?.item_size
                              .slice(5, 8)
                              .replaceAll(/[^a-zA-Z ]/g, "")}{" "}
                            ,
                          </div>
                          <div>
                            {new Date(item?.createdAt)
                              .toGMTString()
                              .slice(0, 16)}{" "}
                            <br />
                            Order #: {item?.order_id}
                          </div>
                        </div>
                      </div>

                      <div
                        className="d-flex tagline"
                        style={{ margin: "unset", columnGap: "200px" }}
                      >
                        <div>Total Amount</div>
                        <div>{currency}. {item?.item_price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </Col>

              <Col lg={5} className="offset-1">
                {/* <div
                className="hLine"
                style={
                  order?.installmentPayout?.length == 2
                    ? { height: "50px" }
                    : { height: "107px" }
                }
              ></div> */}

                <div className="checkOutPayment">
                  <div className="checkOuttitle">
                    Pay in {order?.installmentPayout?.length} installment
                  </div>
                  <div className="checkOutsubtitle">Payment Schedule</div>

                  <div className="d-flex breakout">
                    {order?.installmentPayout?.length == 2 ? (
                      <Third />
                    ) : (
                      <Second />
                    )}
                    <p className="breakoutText" style={{ flex: "5" }}>
                      {"Today"}
                    </p>
                    <p className="breakoutText">
                      {currency}. {order?.installmentPayout[0]?.installment_amount}
                    </p>
                  </div>

                  <div className="d-flex breakout" style={{ opacity: "0.6" }}>
                    {order?.installmentPayout?.length == 2 ? (
                      <Fourth />
                    ) : (
                      <Third />
                    )}
                    <p className="breakoutText" style={{ flex: "5" }}>
                      {new Date(order?.installmentPayout[1]?.due_date)
                        .toGMTString()
                        .slice(0, 16)}
                    </p>
                    <p className="breakoutText">
                      {currency}. {order?.installmentPayout[1]?.installment_amount}
                    </p>
                  </div>

                  {order?.installmentPayout?.length == 3 && (
                    <div className="d-flex breakout" style={{ opacity: "0.6" }}>
                      <Fourth />
                      <p className="breakoutText" style={{ flex: "5" }}>
                        {new Date(order?.installmentPayout[2]?.due_date)
                          .toGMTString()
                          .slice(0, 16)}
                      </p>
                      <p className="breakoutText">
                        {currency}. {order?.installmentPayout[2]?.installment_amount}
                      </p>
                    </div>
                  )}

                  {/* horizontal line */}
                  <div className="cardLine"></div>
                  <p className="cardTitle">
                    * Make sure your card is activated for international Online
                    Transactions.
                  </p>

                  {/* card detail */}

                  {/* <div className="d-flex gap-5 mb-3">
                  <span>
                    <input type="radio" value="credit" checked disabled/> &nbsp; Credit
                  </span>
                  <span>
                    <input type="radio" value="debit" disabled/> &nbsp; Debit
                  </span>
                </div> */}
                  {addCard ? (
                    <>
                      <div className="addCardInputGroup">
                        <input
                          type="number"
                          placeholder="Card number"
                          onChange={(e) => setUserCardNumber(e.target.value)}
                          onBlur={(e) => setUserCardNumber(e.target.value)}
                          value={cardNumber}
                          className="cardDetail addCardFromNop"
                        />
                        <input
                          placeholder="MM/YY"
                          id="expiry"
                          onChange={(e) => setExpiryDate(e.target.value)}
                          onKeyDown={keyHandler}
                          value={expiry}
                          className="cardDetail addCardFromNop"
                        />
                        <input
                          type="number"
                          placeholder="CVC"
                          id="cvc"
                          onChange={(e) => setCvcNumber(e.target.value)}
                          value={cvc}
                          className="cardDetail addCardFromNop"
                        />
                      </div>
                      <span className="cardErrorMsg">{cardError}</span>
                    </>
                  ) : (
                    <div className="cardDetail">
                      {card?.token ? (
                        <>
                          <div className="cardType">
                            <Visa />
                          </div>

                          <p className="cardNumber marginRevert">
                            *************{card?.lastDigit}
                          </p>
                        </>
                      ) : (
                        <p
                          onClick={() => setaddCard(true)}
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                          }}
                        >
                          <div style={{ flexGrow: "24" }}>Add Card</div>

                          <div className="d-flex">
                            <div className="cardType">
                              <Visa />
                            </div>
                            <div className="cardType">
                              <Master />
                            </div>
                          </div>
                        </p>
                      )}
                    </div>
                  )}

                  {/* card instructions */}
                  {/* <div className="cardInstruction">
                  <svg
                    className="astrik"
                    id="Group_3767"
                    data-name="Group 3767"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.398"
                    height="30.481"
                    viewBox="0 0 23.398 30.481"
                  >
                    <rect
                      id="Rectangle_3104"
                      data-name="Rectangle 3104"
                      width="10"
                      height="14"
                      transform="translate(13.398 6.24)"
                      fill="#f7f7ff"
                    />
                    <text
                      id="_"
                      data-name="*"
                      transform="translate(3 20.785) rotate(30)"
                      fill="#f100aa"
                      fontSize="25"
                      fontFamily="SF Pro"
                    >
                      <tspan x="0" y="0">
                        *
                      </tspan>
                    </text>
                  </svg>

                  <p>
                    Please provide next 3 months payment post dated cheques
                    <br />
                    on product delivery.
                  </p>
                </div> */}

                  <div className="d-flex gap-2 mt-4 signUpCheck">
                    <input type="checkbox" checked readOnly />
                    <div className="checkmark"></div>{" "}
                    <span style={{ fontSize: "12px", color: "#658CC5" }}>
                      I agree to the <a href="https://payfor.pk/terms.html" >Terms & Conditions</a>
                    </span>
                  </div>

                  <Button
                    className="gardientBtn mt-4"
                    style={{ height: "44px", fontSize: "16px", width: "100%" }}
                    id="payNow"
                    disabled={
                      (cardNumber?.length == 16 &&
                        cvc?.length == 3 &&
                        cardError == null) ||
                      card?.lastDigit
                        ? false
                        : true
                    }
                    onClick={paynow}
                  >
                     {isLoading? "Please Wait ..." : 
                     "Pay Now"
                     }
                  </Button>
                </div>
              </Col>
            </Row>
          )}
          {/* user dashboard footer */}
          <UserDashboardFooter />
        </Container>
      ) : (
        <div style={{ paddingTop: "3%" }} className="text-center">
          {msg}
        </div>
      )}
    </div>
  );
}
