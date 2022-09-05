import "./index.css";
import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { UserNavigation } from "../../component/userNavbar";
import { Link } from "react-router-dom";
import { UserDashboardFooter } from "../../component/userDashboardFooter";
import { UserProfileNavigation } from "../../component/userProfileNavbar";
import card from "../../assets/images/card.png";
import visa from "../../assets/images/visa.png";
// import master from "../../assets/images/master.png";
import add from "../../assets/images/add.png";
import { AddCard } from "./addCard";
import { getUserCardDetail } from "../../redux/actions";

export function Payment() {
  const [modalShow, setModalShow] = useState(false);
  const card_detail = useSelector((state) => state.userCardReducer);
  const [cardData, setCardData] = useState(card_detail?.cardData);

  useEffect(() => {
    setCardData(card_detail?.cardData);
  }, [card_detail]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCardDetail(6));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  console.log("cardData", cardData);
  return (
    <div className="bodySegment">
      <UserNavigation />

      <Container style={{ marginTop: "62px" }}>
        <Row>
          <Col lg={3} md={3} sm={3}>
            <UserProfileNavigation payment={true} />
          </Col>

          <Col style={{ marginBottom: "25px" }}>
            <div className="orderDetail cards">
              <div className="title">Payment Method</div>

              {/* no card  */}
              {!cardData?.card_holder_name && (
                <div className="noCard">
                  <img
                    style={{ width: "23px", height: "23px" }}
                    src={card}
                    alt="shopImg"
                  />

                  <span>No payment card added at the moment.</span>
                </div>
              )}

              {/* no card  */}
              <div className="Card d-flex" style={{ columnGap: "250px" }}>
                <span>Add a Card</span>
                <img
                  style={{ width: "23px", height: "23px", cursor: "pointer" }}
                  src={add}
                  onClick={() => setModalShow(true)}
                  alt="shopImg"
                />
              </div>

              {cardData?.card_holder_name && (
                <Link to="/user/payment/removeCard">
                  <div className="Card">
                    <Row>
                      <Col lg={2}>
                        {cardData?.card_type === "visa" && (
                          <img
                            style={{
                              width: "49px",
                              height: "32px",
                              marginTop: "-7%",
                            }}
                            src={visa}
                            alt="shopImg"
                          />
                        )}
                      </Col>
                      <Col>
                        <span>
                          <sup>xxxxxxxxx</sup>
                          {cardData?.lastDigit}
                        </span>
                      </Col>

                      <Col lg={2} style={{ textAlign: "right" }}>
                        {cardData?.is_primary === "1" && <span>Primary</span>}
                      </Col>

                      <Col
                        lg={2}
                        style={{ textAlign: "right", cursor: "pointer" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7.743"
                          height="13.228"
                          viewBox="0 0 7.743 13.228"
                        >
                          <path
                            id="Chevron"
                            d="M1.589,12.959l5.966-5.9a.629.629,0,0,0,0-.9L1.589.269a.94.94,0,0,0-1.317,0,.913.913,0,0,0,0,1.3l5.1,5.044-5.1,5.043a.914.914,0,0,0,0,1.3.94.94,0,0,0,1.317,0"
                            fill="#6801fe"
                          />
                        </svg>
                      </Col>
                    </Row>
                  </div>
                </Link>
              )}

              {/* primary card  */}
              {/* <div className="Card">
                <Row>
                  <Col lg={2}>
                    <img
                      style={{
                        width: "49px",
                        height: "32px",
                        marginTop: "-7%",
                      }}
                      src={master}
                      alt="shopImg"
                    />
                  </Col>
                  <Col>
                    <span>
                      <sup>xxxxxxxxx</sup>6168
                    </span>
                  </Col>

                  <Col lg={4} style={{ textAlign: "right", cursor: "pointer" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7.743"
                      height="13.228"
                      viewBox="0 0 7.743 13.228"
                    >
                      <path
                        id="Chevron"
                        d="M1.589,12.959l5.966-5.9a.629.629,0,0,0,0-.9L1.589.269a.94.94,0,0,0-1.317,0,.913.913,0,0,0,0,1.3l5.1,5.044-5.1,5.043a.914.914,0,0,0,0,1.3.94.94,0,0,0,1.317,0"
                        fill="#6801fe"
                      />
                    </svg>
                  </Col>
                </Row>
              </div> */}
            </div>
          </Col>
        </Row>

        {/* user dashboard footer */}
        <UserDashboardFooter />
      </Container>

      {/* Model add Card */}

      <AddCard show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
