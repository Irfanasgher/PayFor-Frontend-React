import { React, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../../component/navbar";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../component/footer";
import { toast } from "react-toastify";
import { forgetPasswordVerifyOTP } from "../../redux/actions";

export function EmailOtp() {
  const [code, setCode] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {email,isEmailOtpVerified} = useSelector((state)=>state.forgetPasswordReducer);
  const [isOtp,setOtp] = useState(false);

  useEffect(()=>{
    setOtp(isEmailOtpVerified);
    if(isEmailOtpVerified){
      navigate("/reset");
    }
  },[isEmailOtpVerified])

  const handelForm = (e) => {
    e.preventDefault();
      const body = {
          email,
          code
      }
      // dispatch an action to sent otp
      dispatch(forgetPasswordVerifyOTP(body));

      // jump to OTP screen
      // navigate("/signup/identity");
    
  };

  return (
    <div className="bodySegment">
      <Navigation />

      <Container fluid>
        <Row>
          <Col md={12}>
            <div className="navtypo">
              Enter your OTP sent to your Email Address
            </div>
            <Form className="form otp" onSubmit={handelForm}>
              {/* <div className="d-flex mb-4">
                <input type="number" maxLength={1} />
                <input type="number" maxLength={1} />
                <input type="number" maxLength={1} />
                <input type="number" maxLength={1} />
              </div> */}
              <OtpInput
                className="mb-4"
                value={code}
                onChange={setCode}
                numInputs={4}
                separator={<span></span>}
              />

              <Button
                type="submit"
                className="simplebtn mt-3"
                style={{ width: "100%" }}
              >
                Verify
              </Button>

              <div className="text1">
                Didn't receive an OTP? <Link to="#">Resend OTP</Link>
              </div>

              <Footer />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
