import "./index.css";
import { React, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../../component/navbar";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../component/footer";
import { toast } from "react-toastify";
import { verifyOTPCode,verifyEmailOTPCode,signUp } from "../../redux/actions";

export function OTP() {
  const [code, setCode] = useState();
  const [emailOtp, setEmailOtp] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isOtpVerified = useSelector((state)=>state.otpReducer.otp);
  const isemailOtpVerify = useSelector((state)=>state.otpReducer.emailOtp);
  const [isOtp,setOtp] = useState(isOtpVerified);

  const { phone,email } = useSelector((state) => state.signupReducer);


  const data = useSelector((state) => state.signupReducer);
  
  const redirect = async () => {
    const signUpData = {
      email: data.email,
      password: data.password,
      phone_number: data.phone,
      first_name: data.first_name,
      last_name: data.last_name,
      address: data.address,
      country: data.country,
      province: data.province,
      city: data.city,
      postal_code: data.postal_code,
      dob: data.dob,
      nic: data.nic,
    };

    
    await dispatch(signUp(signUpData));
  };

  useEffect(async()=>{
    setOtp(isOtpVerified);
    if(isOtpVerified && isemailOtpVerify){
      await redirect();
      dispatch({type:'RESET_STORE'})

      navigate("/signIn");
    }
  },[isOtpVerified,isemailOtpVerify])

  const handelForm = (e) => {
    e.preventDefault();
    if (code.length > 3) {
      const otp = {
        phone_number: phone,
        code: code,
      };


      // dispatch an action to sent otp
      dispatch(verifyOTPCode(otp));

      // jump to OTP screen
      // navigate("/signup/identity");
    } else {
      toast.warn("Please Enter Full Code");
    }
  };

  

  const handelEmailForm = (e) => {
    e.preventDefault();
    if (emailOtp.length > 3) {
      const otp = {
        phone_number:email,
        code: emailOtp,
      };


      // dispatch an action to sent otp
      dispatch(verifyEmailOTPCode(otp));

      // jump to OTP screen
      // navigate("/signup/identity");
    } else {
      toast.warn("Please Enter Full Code");
    }
  };



  return (
    <div className="bodySegment">
      <Navigation />

      <Container fluid>
        <Row>
          {isOtp ? null :
          <Col md={12}>
            <div className="navtypo">
              Enter your OTP sent to your phone number
            </div>
            <Form className="form otp" onSubmit={handelForm}>
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
            </Form>
          </Col>
          }
          <Col md={12}>
            <div className="navtypo">
              Enter your OTP sent to your Email
            </div>
            <Form className="form otp" onSubmit={handelEmailForm}>
              <OtpInput
                className="mb-4"
                value={emailOtp}
                onChange={setEmailOtp}
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
