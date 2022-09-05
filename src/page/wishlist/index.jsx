import "./index.css";
import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UserNavigation } from "../../component/userNavbar";
import { UserDashboardFooter } from "../../component/userDashboardFooter";
import { UserProfileNavigation } from "../../component/userProfileNavbar";
import heart from "../../assets/images/heart.png";

export function Wishlist() {
  return (
    <div className="bodySegment">
      <UserNavigation />

      <Container style={{ marginTop: "62px" }}>
        <Row>
          <Col lg={3} md={3} sm={3}>
            <UserProfileNavigation wishlist={true} />
          </Col>

          <Col style={{ marginBottom: "25px" }}>
            <div className="orderDetail">
              <div className="title">Wishlist</div>

              <div className="d-flex wishlistParent">
                <div>
                  <div className="wishlistImg">
                    <img
                      src="https://www.asimjofa.com/images/thumbs/0003548_ajmr-04_1000.jpeg"
                      alt="asimjofa"
                    />
                  </div>
                  <div className="wishListProductName">Product Name</div>
                  <img className="heart" src={heart} alt="asimjofa" />
                </div>

                <div>
                  <div className="wishlistImg">
                    <img
                      src="https://www.asimjofa.com/images/thumbs/0003548_ajmr-04_1000.jpeg"
                      alt="asimjofa"
                    />
                  </div>
                  <div className="wishListProductName">Product Name</div>
                  <img className="heart" src={heart} alt="asimjofa" />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* user dashboard footer */}
        <UserDashboardFooter />
      </Container>
    </div>
  );
}
