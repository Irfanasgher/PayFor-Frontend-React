import "./index.css";
import { React, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  FormLabel,
} from "react-bootstrap";
import { Navigation } from "../../component/navbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../component/footer";
import { useDispatch, useSelector } from "react-redux";
import { maintainUserState, getOTPCode,getOTPCodeForEmail } from "../../redux/actions";
import { toast } from "react-toastify";
import {countryList} from './countryList';

export function UserBio() {

  
  const user = useSelector((state) => state.signupReducer);
  console.log(user.address,"user");

  const [address, setAddress] = useState(user?.address || "");
  const [country, setCountry] = useState(user?.country || "");
  const [province, setProvince] = useState(user?.province || "");
  const [city, setCity] = useState(user?.city || "");
  const [postal_code, setPostalCode] = useState(user?.postal_code || "");
  const [dob, setDOB] = useState({ d: "", m: "", y: "" });
  const [nic, setNIC] = useState({ f: "", m: "", l: "" });
  const [term,setTerm] = useState(false)


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { phone,email } = useSelector((state) => state.signupReducer);
  // console.log("state", phone);

  const handelForm = (e) => {
    console.log(nic.l.length,"nic.l.length")
    e.preventDefault();
    if (
      address !== "" &&
      country !== "" &&
      province !== "" &&
      city !== "" &&
      postal_code !== "" &&
      dob.d !== "" &&
      dob.m !== "" &&
      dob.y !== "" &&
      nic.f !== "" &&
      nic.m !== "" &&
      nic.l.length==1
    ) {
      let date = new Date(dob.y + "-" + dob.m + "-" + dob.d);

      const bio = {
        address,
        country,
        province,
        city,
        postal_code,
        dob: date,
        nic: nic.f + nic.m + nic.l,
      };

      // maintain global state in redux
      dispatch(maintainUserState(bio));

      const otp = {
        phone_number: phone,
        is_signUp: true,
      };

      // dispatch an action to sent otp
      dispatch(getOTPCode(otp));
      // dispatch an action to sent otp
      const emailOtp={
        email
      }
      dispatch(getOTPCodeForEmail(emailOtp));

      // jump to OTP screen
      navigate("/signup/otp");

    } else {
      toast.warn("all fields are mandatory");
    }
  };

  return (
    <div className="bodySegment">
      <Navigation />

      <Container fluid>
        <Row>
          <Col>
            <div className="navtypo">Almost Done!</div>

            <Form method="post" onSubmit={handelForm} className="form">
              <FloatingLabel name label="Address" className="mb-2">
                <Form.Control
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  value={address}
                  type="text"
                  placeholder="abc"
                />
              </FloatingLabel>

              <div className="d-flex " style={{ columnGap: "12px" }}>
                <FloatingLabel name label="Country" className="mb-2">
                  <Form.Control
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    value={country}
                    type="text"
                    placeholder="abc"
                    list="countries"
                  />
                  <datalist id="countries">
                    {
                      countryList.map((country)=>
                        <option value={country} />
                      )
                    }
                  </datalist>
                </FloatingLabel>
                <FloatingLabel name label="Province" className="mb-2">
                  <Form.Control
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                    value={province}
                    type="text"
                    placeholder="abc"
                  />
                </FloatingLabel>
              </div>

              <div className="d-flex " style={{ columnGap: "12px" }}>
                <FloatingLabel name label="City" className="mb-2">
                  <Form.Control
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    value = {city}
                    type="text"
                    placeholder="abc"
                  />
                </FloatingLabel>
                <FloatingLabel name label="Postal Code" className="mb-2">
                  <Form.Control
                    onChange={(e) => {
                      setPostalCode(e.target.value);
                    }}
                    value = {postal_code}
                    type="text"
                    placeholder="abc"
                  />
                </FloatingLabel>
              </div>

              <FormLabel className="mt-3">Date of Birth</FormLabel>
              <div className="d-flex " style={{ columnGap: "12px" }}>
                <FloatingLabel name label="DD" className="mb-2">
                  <Form.Control
                    onChange={(e) => {
                      if(e.target.value<32){
                        setDOB({ ...dob, d: e.target.value });
                      }
                    }}
                    value = {dob.d}
                    type="text"
                    placeholder="abc"
                  />
                </FloatingLabel>

                <FloatingLabel name label="MM" className="mb-2">
                  <Form.Control
                    onChange={(e) => {
                      if(e.target.value<13){
                        setDOB({ ...dob, m: e.target.value });
                      }
                    }}
                    value={dob.m}
                    type="text"
                    placeholder="abc"
                  />
                </FloatingLabel>

                <FloatingLabel name label="YYYY" className="mb-2">
                  <Form.Control
                    onChange={(e) => {
                      if(e.target.value.length<5 && e.target.value<2005){
                        setDOB({ ...dob, y: e.target.value });
                      }
                    }}
                    value = {dob.y}
                    type="text"
                    placeholder="abc"
                  />
                </FloatingLabel>
              </div>

              <FormLabel className="mt-3 ">
                National Identity Card Number
              </FormLabel>
              <div className="d-flex idcard mt-3" style={{ columnGap: "12px" }}>
                <input
                  onChange={(e) => {
                    setNIC({ ...nic, f: e.target.value });
                    if(e.target.value.length>=5){
                      document.getElementById("mid").focus();
                    }
                  }}
                  value={nic.f}
                  type="number"
                  placeholder="00000"
                />
                <input
                  onChange={(e) => {
                    setNIC({ ...nic, m: e.target.value });
                    if(e.target.value.length>=7){
                      document.getElementById("final").focus();
                    }
                  }}
                  value={nic.m}
                  type="number"
                  id="mid"
                  placeholder="00000"
                />
                <input
                  onChange={(e) => {
                    if(e.target.value.length==1){
                      setNIC({ ...nic, l: e.target.value });
                      return
                    }
                  }}
                  value={nic.l}
                  id="final"
                  type="number"
                  placeholder="0"
                />
              </div>

              <div className="d-flex gap-2 mt-5 signUpCheck">
                <input type="checkbox" value={term} onChange={()=>setTerm(!term)}  />
                <div className="checkmark"></div>{" "}
                <span style={{ fontSize: "12px", color: "#658CC5" }}>
                  I want update & offers through Emai
                </span>
              </div>

              <Button
                type="submit"
                className="simplebtn mt-3"
                style={{ width: "100%" }}
                disabled={term?false:true}

              >
                Finish
              </Button>

              <Footer />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
