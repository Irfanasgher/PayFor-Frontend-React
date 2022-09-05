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
// import { formValidation } from "../../component/formValidation";
import { resetPassword } from "../../redux/actions";

export function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordProcess, setPasswordProcess] = useState(false);
  const { email, isPasswordChanged } = useSelector(
    (state) => state.forgetPasswordReducer
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isPasswordChanged) {
      navigate("/signin");
    }
  }, [isPasswordChanged]); // eslint-disable-line react-hooks/exhaustive-deps

  const handelChangePassword = async () => {
    setPasswordProcess(true);

    if (password.length === 0) {
      toast.warning("password is required");
      setPasswordProcess(false);
      return;
    }

    if (password.length < 8) {
      toast.warning("password must be 8 character long");
      setPasswordProcess(false);
      return;
    }

    const changePassObj = {
      email,
      password,
    };

    await dispatch(resetPassword(changePassObj));

    setPasswordProcess(false);
  };

  return (
    <Container fluid>
      <Row>
        {/* section1 */}

        <Col lg={6} md={6} className="section1">
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>

          <div className="typo">New Password</div>

          <div className="d-grid gap-1 btn-group">
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-4"
            >
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>

            <Button
              variant="primary"
              size="lg"
              className="gardientBtn"
              onClick={handelChangePassword}
              disabled={passwordProcess ? true : false}
            >
              {passwordProcess ? "Processing" : "Submit"}
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
              <li>Pay in 2 Installements</li>
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
