import "./index.css";
import { React, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserNavigation } from "../../component/userNavbar";
import { UserDashboardFooter } from "../../component/userDashboardFooter";
import { UserProfileNavigation } from "../../component/userProfileNavbar";
import { getUserCardDetail, deleteUserCard } from "../../redux/actions";

export function RemoveCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCardDetail(6));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const { cardData } = useSelector((state) => state.userCardReducer);
  console.log("cardData", cardData);

  const handelForm = () => {
    const id = cardData.id;
    dispatch(deleteUserCard(id));
    console.log("delete");
    navigate("/user/payment");
  };

  return (
    <div className="bodySegment">
      <UserNavigation />

      <Container style={{ marginTop: "62px" }}>
        <Row>
          <Col lg={3} md={3} sm={3}>
            <UserProfileNavigation payment={true} />
          </Col>

          <Col style={{ marginBottom: "25px" }}>
            <div className="orderDetail">
              <div className="title">Payment Method</div>
              <Row>
                <Col lg={7}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="+923xxxxxxxxx"
                      readOnly
                      defaultValue={cardData?.card_holder_name}
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingInput"
                    label="Number"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="+923xxxxxxxxx"
                      readOnly
                      value={`xxxxxxxxx${cardData.lastDigit}`}
                    />
                  </FloatingLabel>

                  {/* <label>Expiry Date</label>
                  <div
                    className="d-flex expiryDate"
                    style={{ columnGap: "21px" }}
                  >
                    <FloatingLabel
                      controlId="floatingInput"
                      label="MM"
                      className="mb-3"
                    >
                      <Form.Control type="number" placeholder="+923xxxxxxxxx" />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Year"
                      className="mb-3"
                    >
                      <Form.Control type="number" placeholder="+923xxxxxxxxx" />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="CVV"
                      className="mb-3"
                    >
                      <Form.Control type="number" placeholder="+923xxxxxxxxx" />
                    </FloatingLabel>
                  </div> */}

                  <div className="cardIns">Use for Payfor Installment</div>

                  <div className="d-flex" style={{ columnGap: "90px" }}>
                    <div className="cardCheck">
                      We will use the payment method for all your orders
                    </div>

                    <div className="signUpCheck">
                      <input type="checkbox" />
                      <div className="checkmark"></div>
                    </div>
                  </div>

                  <Button
                    onClick={() => handelForm()}
                    className="simplebtn"
                    size="lg"
                    style={{ width: "100%" }}
                  >
                    Remove Card
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* user dashboard footer */}
        <UserDashboardFooter />
      </Container>
    </div>
  );
}
