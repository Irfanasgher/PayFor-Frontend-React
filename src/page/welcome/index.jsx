import { React } from "react";
import { Link } from "react-router-dom";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";
import wePayfor from "../../assets/images/wePayfor.png";
import payforbig2 from "../../assets/images/payforbig2.png";
import appStore from "../../assets/images/appStore.png";
import googlePlay from "../../assets/images/googlePlay.png";

export function Welcome() {
  const { store } = useSelector((state) => state.storeReducer);

  console.log("store", store);

  return (
    <Container fluid>
      <Row>
        {/* section1 */}

        <Col lg={6} md={6} className="section1">
          <div className="logo">
            <Image src={logo} />
          </div>

          <div className="typo">Welcome</div>

          <div className="d-grid gap-4 btn-group">
            <Link to="/signin">
              <Button
                variant="primary"
                size="lg"
                className="gardientBtn"
                style={{ width: "100%" }}
              >
                Sign In
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.01"
                  height="11.392"
                  viewBox="0 0 20.01 11.392"
                >
                  <path
                    id="Symbol"
                    d="M2977.884,181.46a1.082,1.082,0,0,0,1.073-1.059V166.463l-.081-2.041.923.964,2.05,2.2a.992.992,0,0,0,.732.326.949.949,0,0,0,.99-.906c0-.02,0-.039,0-.058a.951.951,0,0,0-.312-.706l-4.589-4.424a1.029,1.029,0,0,0-1.575,0l-4.59,4.424a.96.96,0,0,0-.326.706.944.944,0,0,0,.926.964h.052a1,1,0,0,0,.746-.326l2.064-2.2.922-.964-.093,2.041V180.4A1.093,1.093,0,0,0,2977.884,181.46Z"
                    transform="translate(181.461 -2972.18) rotate(90)"
                    fill="#fff"
                  />
                </svg>
              </Button>
            </Link>

            <Link to="/signup">
              <Button className="simplebtn" size="lg" style={{ width: "100%" }}>
                Create Account
              </Button>
            </Link>
          </div>

          <div className="instruction">
            <p className="title">Message and Data rates may apply.</p>
            <p>
              By proceeding, I accept the PayFor Shopping Service and confirm
              that I <br />
              have read PayFor Privacy Notice. Links in the app are sponsored.
            </p>
            {/* <p>
              This page is protected by reCAPTCHA. By continuing I confirm
              having <br />
              read Google’s Privacy Policy and accepted Google’s Terms.
            </p> */}
          </div>

          <div className="footer">© Copyright Payfor 2022</div>
        </Col>

        {/* section 2 */}
        <Col lg={6} md={6} id="picSection">
          <h3 className="shopConfidence">Shop with Confidence</h3>
          <Image src={wePayfor} width={520} style={{ objectFit: "cover" }} />
          <div className="listContainer">
            <ul>
              <li>Buy Now Pay Later</li>
              <li>Pay in Easy Installements</li>
              <li>No Markup</li>
              <li>No hidden fees</li>
              {/* <li>Not even late fees.</li> */}
            </ul>
          </div>
          <div className="imageContainer">
            <Image src={payforbig2} className="circlePayfor" />
          </div>
          <div className="storeContainer">
            <Image src={appStore} className="appStore" />
            <Image src={googlePlay} className="appStore googlePlay" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
