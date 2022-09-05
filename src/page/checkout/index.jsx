import { React } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import { UserNavigation } from "../../component/userNavbar";
import { UserDashboardFooter } from "../../component/userDashboardFooter";
import "./index.css";
import { useSelector } from "react-redux";

export function CheckOut() {
  const location = useLocation();
  console.log("PRops data:", location);
  const data = location?.state;
  var arr = data?.itemDetail[0].createdAt;
  var date = arr.split("T");
  const card_detail = useSelector((state) => state.userCardReducer);

  return (
    <div className="bodySegment">
      <UserNavigation />

      <Container style={{ marginTop: "62px" }}>
        <Row>
          <Col lg={3} className="offset-2">
            <div className="checkOutProduct">
              <div className="checkOutProductDetail">
                <div className="checkOuttitle" style={{ marginLeft: "16px" }}>
                  {data?.itemDetail[0].item_name}
                </div>

                <div className="d-flex mb-3">
                  <div className="productImg">
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={data?.itemDetail[0].item_image_url}
                      // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKMJzlCoZY6gyJQrZF_2OCD-AF6xOJyYa7Q&usqp=CAU"
                      alt="shopImg"
                    />
                  </div>

                  <div className="d-flex flex-column prodDescription">
                    <div>
                      Size:{" "}
                      {data?.itemDetail[0].item_size
                        .slice(5, 8)
                        .replaceAll(/[^a-zA-Z ]/g, "")}
                      ,
                    </div>
                    <div>
                      {date[0]} <br />
                      Order #: {data?.itemDetail[0].order_id}
                    </div>
                  </div>
                </div>

                <div
                  className="d-flex tagline"
                  style={{ margin: "unset", columnGap: "200px" }}
                >
                  <div>Total Amount</div>
                  <div>{data?.isoCurrency}. {data?.itemDetail[0].item_price}</div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={5} className="offset-1">
            <div className="checkOutPayment">
              <div className="checkOuttitle">Pay in 2 installment</div>
              <div className="checkOutsubtitle">Payment Schedule</div>

              <div className="d-flex breakout">
                <svg
                  className="breakoutsvg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="62"
                  viewBox="0 0 1 62"
                >
                  <defs>
                    <radialGradient
                      id="radial-gradient"
                      cx="0.5"
                      cy="0.5"
                      r="0.5"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#0115d0" />
                      <stop offset="1" stopColor="#f10faa" />
                    </radialGradient>
                    <radialGradient id="radial-gradient-2" cy="0" />
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      y1="0"
                      x2="0.5"
                      y2="1"
                    />
                  </defs>

                  <g
                    id="Group_3582"
                    data-name="Group 3582"
                    transform="translate(2)"
                  >
                    <path
                      id="Path_14893"
                      data-name="Path 14893"
                      d="M852.3,1155.633a12.973,12.973,0,1,1,12.974-12.973A12.988,12.988,0,0,1,852.3,1155.633Z"
                      transform="translate(-839.322 -1129.687)"
                      fill="#fff"
                    />
                    <path
                      id="Path_14892"
                      data-name="Path 14892"
                      d="M853.925,1150.24H864.14a10.215,10.215,0,0,1-20.429,0C843.711,1150.194,843.711,1150.148,853.925,1150.24Z"
                      transform="translate(-840.951 -1137.267)"
                      fill="url(#radial-gradient)"
                    />
                  </g>
                </svg>
                <p className="breakoutText" style={{ flex: "5" }}>
                  Today
                </p>
                <p className="breakoutText">
                  {data?.isoCurrency}. {data?.installmentPayout[0]?.installment_amount}
                </p>
              </div>

              <div className="d-flex breakout" style={{ opacity: "0.6" }}>
                <svg
                  className="breakoutsvg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="62"
                  viewBox="0 0 1 62"
                >
                  <defs>
                    <radialGradient
                      id="radial-gradient"
                      cx="0.5"
                      cy="0.5"
                      r="0.5"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#0115d0" />
                      <stop offset="1" stopColor="#f10faa" />
                    </radialGradient>
                    <radialGradient id="radial-gradient-2" cy="0" />
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      y1="0"
                      x2="0.5"
                      y2="1"
                    />
                  </defs>
                  <g
                    id="Group_3582"
                    data-name="Group 3582"
                    transform="translate(2)"
                  >
                    <path
                      id="Path_14889"
                      data-name="Path 14889"
                      d="M983.73,1155.633A12.973,12.973,0,1,1,996.7,1142.66,12.988,12.988,0,0,1,983.73,1155.633Z"
                      transform="translate(-970.757 -1129.687)"
                      fill="#fff"
                    />
                    <ellipse
                      id="Ellipse_247"
                      data-name="Ellipse 247"
                      cx="10.214"
                      cy="10.214"
                      rx="10.214"
                      ry="10.214"
                      transform="translate(2.759 2.759)"
                      fill="url(#radial-gradient)"
                    />
                  </g>
                </svg>
                <p className="breakoutText" style={{ flex: "5" }}>
                  {new Date(data?.installmentPayout[1]?.due_date)
                    .toGMTString()
                    .slice(0, 16)}
                </p>
                <p className="breakoutText">
                {data?.isoCurrency}. {data?.installmentPayout[1].installment_amount}
                </p>
              </div>

              {/* <div className="d-flex breakout" style={{ opacity: "0.6" }}>
                <svg
                  className="breakoutsvg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="62"
                  viewBox="0 0 1 62"
                >
                  <defs>
                    <radialGradient
                      id="radial-gradient"
                      cx="0.5"
                      cy="0.5"
                      r="0.5"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#0115d0" />
                      <stop offset="1" stopColor="#f10faa" />
                    </radialGradient>
                    <radialGradient id="radial-gradient-2" cy="0" />
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      y1="0"
                      x2="0.5"
                      y2="1"
                    />
                  </defs>
                  <g
                    id="Group_3582"
                    data-name="Group 3582"
                    transform="translate(2)"
                  >
                    <path
                      id="Path_14889"
                      data-name="Path 14889"
                      d="M983.73,1155.633A12.973,12.973,0,1,1,996.7,1142.66,12.988,12.988,0,0,1,983.73,1155.633Z"
                      transform="translate(-970.757 -1129.687)"
                      fill="#fff"
                    />
                    <ellipse
                      id="Ellipse_247"
                      data-name="Ellipse 247"
                      cx="10.214"
                      cy="10.214"
                      rx="10.214"
                      ry="10.214"
                      transform="translate(2.759 2.759)"
                      fill="url(#radial-gradient)"
                    />
                  </g>
                </svg>
                <p className="breakoutText" style={{ flex: "5" }}>
                  {new Date(data?.installmentPayout[2]?.due_date)
                    .toGMTString()
                    .slice(0, 16)}
                </p>
                <p className="breakoutText">
                  Rs. {data.installmentPayout[0].installment_amount}
                </p>
              </div> */}

              {/* horizontal line */}
              <div className="cardLine"></div>
              {/* <p className="cardTitle">
                * Make sure your card is activated for international Online
                Transactions.
              </p> */}

              {/* card detail */}

              {card_detail?.cardData?.lastDigit ? (
                <div className="cardDetail">
                  <div className="cardType">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28.519"
                      height="9.214"
                      viewBox="0 0 28.519 9.214"
                    >
                      <g
                        id="Group_3702"
                        data-name="Group 3702"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_15351"
                          data-name="Path 15351"
                          d="M-563.752,2589.536h-2.1c-.041,0-.043-.023-.049-.049-.085-.414-.171-.827-.254-1.241-.008-.042-.025-.048-.062-.048h-2.864a.062.062,0,0,0-.071.049c-.148.414-.3.828-.449,1.242-.011.032-.023.047-.06.047h-2.374c0-.023.009-.04.017-.058l3.407-8.118a1.119,1.119,0,0,1,.521-.606,1.3,1.3,0,0,1,.586-.131c.617,0,1.233,0,1.85,0,.041,0,.044.022.05.049l.225,1.077q.276,1.321.552,2.642l.574,2.745.492,2.354a.068.068,0,0,0,.01.019Zm-3.489-6.5c-.109.305-.21.595-.316.883q-.444,1.208-.893,2.414c-.012.032-.021.05.03.05q.913,0,1.826,0c.035,0,.047,0,.038-.045q-.306-1.473-.609-2.946C-567.188,2583.272-567.213,2583.159-567.24,2583.031Z"
                          transform="translate(592.271 -2580.456)"
                          fill="#0057a3"
                        />
                        <path
                          id="Path_15352"
                          data-name="Path 15352"
                          d="M-1142.25,2568.5c-.182-.083-.365-.163-.555-.228a4,4,0,0,0-1.652-.191,1.509,1.509,0,0,0-.71.22.666.666,0,0,0-.336.492.5.5,0,0,0,.1.355,1.3,1.3,0,0,0,.348.316,7.771,7.771,0,0,0,.895.494,4.791,4.791,0,0,1,1.137.742,2.238,2.238,0,0,1,.692,1.1,2.419,2.419,0,0,1,.033.971,2.792,2.792,0,0,1-1.648,2.154,4.583,4.583,0,0,1-1.4.415,6.115,6.115,0,0,1-1.1.063,7.406,7.406,0,0,1-2.185-.376c-.07-.024-.138-.055-.207-.081-.025-.01-.032-.021-.027-.05q.147-.9.292-1.8l.027-.167c.143.066.281.13.419.191a4.585,4.585,0,0,0,1.17.362,4.287,4.287,0,0,0,1.275.029,1.511,1.511,0,0,0,.7-.279.675.675,0,0,0,.071-1.058,1.883,1.883,0,0,0-.151-.132,4.087,4.087,0,0,0-.705-.422,7.32,7.32,0,0,1-1.037-.592,3.135,3.135,0,0,1-.713-.682,1.989,1.989,0,0,1-.389-1.358,2.576,2.576,0,0,1,.7-1.615,3.358,3.358,0,0,1,1.227-.825,4.922,4.922,0,0,1,1.479-.337,5.864,5.864,0,0,1,2.28.258c.085.027.167.06.251.089.027.009.032.023.028.049q-.148.9-.294,1.793A.338.338,0,0,1-1142.25,2568.5Z"
                          transform="translate(1162.663 -2566.195)"
                          fill="#0057a3"
                        />
                        <path
                          id="Path_15353"
                          data-name="Path 15353"
                          d="M-2165.681,2585.412c.07.284.117.573.178.859.028.136.054.272.082.408.024-.009.022-.031.028-.046q1.11-2.98,2.217-5.961a.07.07,0,0,1,.078-.056q1.159,0,2.318,0c.069,0,.07,0,.043.064l-3.22,7.9c-.122.3-.244.6-.364.895a.069.069,0,0,1-.077.051q-1.164,0-2.329,0c-.048,0-.065-.015-.078-.06q-.573-2.166-1.149-4.33-.437-1.644-.874-3.289a.094.094,0,0,1-.008-.059.155.155,0,0,1,.069.034,7.833,7.833,0,0,1,1.343,1.009,6.971,6.971,0,0,1,1.472,1.968C-2165.851,2585-2165.768,2585.206-2165.681,2585.412Z"
                          transform="translate(2171.269 -2580.454)"
                          fill="#0057a3"
                        />
                        <path
                          id="Path_15354"
                          data-name="Path 15354"
                          d="M-1484.421,2589.542c-.367,0-.735,0-1.1,0-.041,0-.052,0-.044-.051q.2-1.236.4-2.473.186-1.151.372-2.3.17-1.047.341-2.094.148-.91.294-1.821a.592.592,0,0,0,.017-.1c0-.068.034-.074.09-.074q1.086,0,2.173,0c.051,0,.06.009.051.061q-.187,1.132-.368,2.264-.2,1.256-.406,2.511-.226,1.393-.453,2.786-.1.628-.2,1.256c-.006.039-.025.041-.056.041Z"
                          transform="translate(1495.62 -2580.462)"
                          fill="#0057a3"
                        />
                        <path
                          id="Path_15355"
                          data-name="Path 15355"
                          d="M-2381.311,2585.542c-.086-.206-.17-.412-.27-.612a6.959,6.959,0,0,0-1.473-1.968,7.794,7.794,0,0,0-1.343-1.009.158.158,0,0,0-.069-.034h0c0-.009,0-.01-.01-.011a7.5,7.5,0,0,0-.8-.417,9.537,9.537,0,0,0-1.577-.553c-.036-.009-.051-.019-.041-.062.03-.131.027-.131.162-.131h3.537a1.763,1.763,0,0,1,.42.048.848.848,0,0,1,.673.7c.172.849.336,1.7.5,2.549q.141.717.283,1.433C-2381.313,2585.5-2381.313,2585.522-2381.311,2585.542Z"
                          transform="translate(2386.899 -2580.585)"
                          fill="#fea100"
                        />
                      </g>
                    </svg>
                  </div>
                  <p className="cardNumber marginRevert">*************6168</p>
                </div>
              ) : (
                <>
                  <Link to="/user/payment">Add Card </Link> <br /> <br />
                </>
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
                <input type="checkbox" checked />
                <div className="checkmark"></div>{" "}
                <span style={{ fontSize: "12px", color: "#658CC5" }}>
                  I agree to the Terms & Conditions
                </span>
              </div>

              <Button
                className="gardientBtn mt-4"
                disabled={true}
                style={{ height: "44px", fontSize: "16px", width: "100%" }}
              >
                Pay Now
              </Button>
            </div>
          </Col>
        </Row>
        {/* user dashboard footer */}
        <UserDashboardFooter />
      </Container>
    </div>
  );
}
