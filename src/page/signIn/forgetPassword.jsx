import { React, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Image,
  Row,
  Col,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";
import wePayfor from "../../assets/images/wePayfor.png";
import payforbig2 from "../../assets/images/payforbig2.png";
import appStore from "../../assets/images/appStore.png";
import googlePlay from "../../assets/images/googlePlay.png";
import { Footer } from "../../component/footer";
import { useDispatch, useSelector } from "react-redux";
import { formValidation } from "../../component/formValidation";
import { forgetPasswordSentOTP } from "../../redux/actions";

export function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loginProcess, setLoginProcess] = useState(false);
  const isEmailotp = useSelector((state) => state.forgetPasswordReducer.email);
  const [isOTPsent, setIsOtpSent] = useState(isEmailotp);

  console.log("isOTPsent", isOTPsent);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsOtpSent(isEmailotp);
    if (isEmailotp) {
      navigate("/emailVerification");
    }
  }, [isEmailotp]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogin = async () => {
    setLoginProcess(true);

    if (email.length === 0) {
      toast.warning("Email is required");
      setLoginProcess(false);
      return;
    }

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.toLowerCase().match(regex)) {
      toast.warning("Email is not vaild");
      setLoginProcess(false);
      return;
    }

    await dispatch(forgetPasswordSentOTP({ email }));
    // await dispatch(signinAction({email,password}))
    setLoginProcess(false);
  };

  return (
    <Container fluid>
      <Row>
        {/* section1 */}

        <Col lg={6} md={6} className="section1">
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>

          <div className="typo">Forget Password</div>

          <div className="d-grid gap-1 btn-group">
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-4"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(formValidation(e))}
              />
            </FloatingLabel>

            <Button
              variant="primary"
              size="lg"
              className="gardientBtn"
              onClick={handleLogin}
              disabled={loginProcess ? true : false}
            >
              {loginProcess ? "Processing" : "Submit"}
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
            {/* </Link> */}
          </div>

          <Footer />
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
