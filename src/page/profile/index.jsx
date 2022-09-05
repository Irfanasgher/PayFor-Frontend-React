import { React } from "react";
import { Container, Row, Col, FloatingLabel, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { UserNavigation } from "../../component/userNavbar";
import { UserDashboardFooter } from "../../component/userDashboardFooter";
import { UserProfileNavigation } from "../../component/userProfileNavbar";
import profileDp from "../../assets/images/profileDp.png";

export function Profile() {
  const { orders } = useSelector((state) => state.orderReducer);
  console.log("orders", orders);
  return (
    <div className="bodySegment">
      <UserNavigation />

      <Container style={{ marginTop: "62px" }}>
        <Row>
          <Col lg={3} md={3} sm={3}>
            <UserProfileNavigation profile={true} />
          </Col>

          <Col style={{ marginBottom: "25px" }}>
            <div className="orderDetail">
              <div className="title">Personal Details</div>

              <Form id="userProfile">
                <Row style={{ columnGap: "5px ", paddingLeft: "1%" }}>
                  <Col lg={4} md={4} sm={4}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="First Name"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="+923xxxxxxxxx"
                        readOnly
                        defaultValue={orders?.user?.first_name}
                      />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Last Name"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="+923xxxxxxxxx"
                        readOnly
                        defaultValue={orders?.user?.last_name}
                      />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="+923xxxxxxxxx"
                        readOnly
                        defaultValue={orders?.user?.email}
                      />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Phone Number"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="+923xxxxxxxxx"
                        readOnly
                        defaultValue={orders?.user?.phone_number}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col lg={4} md={4} sm={4}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Address"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="+923xxxxxxxxx"
                        readOnly
                        defaultValue={orders?.user?.address}
                      />
                    </FloatingLabel>

                    <div className="d-flex " style={{ columnGap: "12px" }}>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Country"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="+923xxxxxxxxx"
                          readOnly
                          defaultValue={orders?.user?.country}
                        />
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="floatingInput"
                        label="Province"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="+923xxxxxxxxx"
                          readOnly
                          defaultValue={orders?.user?.province}
                        />
                      </FloatingLabel>
                    </div>

                    <div className="d-flex " style={{ columnGap: "12px" }}>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="City"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="+923xxxxxxxxx"
                          readOnly
                          defaultValue={orders?.user?.city}
                        />
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="floatingInput"
                        label="Postal Code"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="+923xxxxxxxxx"
                          readOnly
                          defaultValue={orders?.user?.postal_code}
                        />
                      </FloatingLabel>
                    </div>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Change Password"
                      className="mb-3"
                    >
                      <Form.Control type="password" value="xxxxxxxx" readOnly />
                    </FloatingLabel>
                  </Col>

                  <Col
                    lg={4}
                    md={4}
                    sm={4}
                    style={{ width: "271px", height: "275px" }}
                  >
                    <img
                      src={profileDp}
                      style={{ width: "100%", height: "100%" }}
                      alt="shopImg"
                    />
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>

        {/* user dashboard footer */}
        <UserDashboardFooter />
      </Container>
    </div>
  );
}
