import "./index.css";
import { React, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { Navigation } from "../../component/navbar";
import { Link } from "react-router-dom";
import { Footer } from "../../component/footer";
import { formValidation } from "../../component/formValidation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { maintainUserState,isPhoneExist,isEmailExist } from "../../redux/actions";
const phoneUtil =
  require("google-libphonenumber").PhoneNumberUtil.getInstance();

export function Signup() {

  
  const user = useSelector((state) => state.signupReducer);
 

  const [email, setEmail] = useState(user?.email|| "");
  const [password, setPassword] = useState(user?.password|| "");
  const [cpassword, setcPassword] = useState("");
  const [phone, setPhone] = useState(user?.phone?.replace("+","")|| "");
  const [phoneCode,setPhoneCode] = useState("+92")
  const [first_name, setFirstName] = useState(user?.first_name|| "");
  const [last_name, setLastName] = useState(user?.last_name|| "");
  const [term,setTerm] = useState(false)
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handelForm = async (e) => {
    e.preventDefault();
    if (
      email !== "" &&
      password !== "" &&
      phone !== "" &&
      first_name !== "" &&
      last_name !== ""
    ) {
      if (password !== cpassword) {
        toast.warn("Password does not match with confirm Password");
        return;
      }
      const user = {
        email,
        password,
        phone: phoneCode+phone,
        first_name,
        last_name,
      };

      // maintain global state in redux
      await dispatch(maintainUserState(user));

      // move to next navigation
      navigate("/signup/bio");
    } else {
      toast("All Fields are mandatory");
    }
  };

  const checkPhone = async(phone_number,e)=>{
    if(phone_number.length<11){
      setPhone(phone_number);
      
    }
    if(phone_number.length==10){
        
        if( phoneCode.includes("92") && !phoneUtil.isValidNumberForRegion(phoneUtil.parse((phoneCode+phone_number), "Pk"), "Pk") ){
          toast.warn("Please Enter valid Pakistan phone number  ")
        }

        if(phoneCode.includes("44") && !phoneUtil.isValidNumberForRegion(phoneUtil.parse((phoneCode+phone_number), "UK"), "UK")){
          toast.warn("Please Enter valid UK phone number  ")
          return
        }

        if(phoneCode.includes("1") && !phoneUtil.isValidNumberForRegion(phoneUtil.parse((phoneCode+phone_number), "US"), "US")){
          toast.warn("Please Enter valid US phone number  ")
          return
        }

        if(phoneCode.includes("235") && !phoneUtil.isValidNumberForRegion(phoneUtil.parse((phoneCode+phone_number), "CA"), "CA")){
          toast.warn("Please Enter valid CAD phone number  ")
          return
        }

        if(phone_number.length>9){
          const btn = document.getElementById("userinfoBtn");
          await dispatch(isPhoneExist(phoneCode+phone_number,e,btn));
        }
    }

    
    
  }

  const checkEmail = async(e)=>{

    const email = e.target.value;
    if(email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    {
      const btn = document.getElementById("userinfoBtn");
      await dispatch(isEmailExist(email,e,btn));

    }
  }

 

  return (
    <div className="bodySegment">
      <Navigation />

      <Container fluid>
        <Row>
          <Col>
            <Form method="post" className="form" onSubmit={handelForm}>
              <div className="navtypo">Let's create your account</div>

              <FloatingLabel label="First Name" className="mb-2">
                <Form.Control
                  onChange={(e) => {
                    setFirstName(formValidation(e));
                  }}
                  value={first_name}
                  name="first_name"
                  type="text"
                  placeholder="abc"
                />
              </FloatingLabel>

              <FloatingLabel label="Last Name" className="mb-3">
                <Form.Control
                  onChange={(e) => {
                    setLastName(formValidation(e));
                  }}
                  value={last_name}
                  name="last_name"
                  type="text"
                  placeholder="xyz"
                />
              </FloatingLabel>

              <FloatingLabel label="Email" className="mb-2">
                <Form.Control
                  onChange={(e) => {
                    setEmail(formValidation(e));
                    checkEmail(e)
                  }}
                  name="email"
                  value={email}
                  type="email"
                  placeholder="name@example.com"
                />
              </FloatingLabel>

              <FloatingLabel label="Password" className="mb-3">
                <Form.Control
                  onChange={(e) => {
                    setPassword(formValidation(e));
                  }}
                  value={password}
                  name="password"
                  type="password"
                  placeholder="*********"
                />
              </FloatingLabel>

              <FloatingLabel label="Confirm Password" className="mb-2">
                <Form.Control
                  onChange={(e) => {
                    setcPassword(e.target.value);
                  }}
                  name="cpassword"
                  type="password"
                  placeholder="*********"
                />
              </FloatingLabel>

              <FloatingLabel label="Phone Number" className="mb-5 d-flex">
                

                  <Form.Control
                    as="select"
                    value={phoneCode}
                    onChange={e => {
                      console.log("e.target.value", e.target.value);
                      setPhoneCode(e.target.value);
                    }}
                    style={{width:'15%',paddingTop:'18px !important',background:'transparent'}}
                  >
                    <option value="+92">+92</option>
                    <option value="+44">+44</option>
                    <option value="+1">+1</option>
                    <option value="+235">+235</option>
                  </Form.Control>
                  <Form.Control
                    onChange={(e) => {
                      checkPhone(e.target.value,e)
                      
                    }}
                    onBlur={(e)=>checkPhone(e.target.value,e)}
                    value={phone}
                    id="Phone_number"
                    name="phone"
                    type="number"
                    placeholder="+923xxxxxxxxx"
                  />

              </FloatingLabel>

              <div className="d-flex gap-2 signUpCheck">
                <input type="checkbox" value={term} onChange={()=>setTerm(!term)} />
                <div className="checkmark"></div>{" "}
                <span style={{ fontSize: "12px", color: "#658CC5" }}>
                  By signing up I agree to Terms & Conditions
                </span>
              </div>

              <Button
                type="submit"
                className="simplebtn mt-3"
                style={{ width: "100%" }}
                disabled={term?false:true}
                id="userinfoBtn"
              >
                Continue
              </Button>

              <div className="text1">
                Already have a payfor account? <Link to="/signin">Sign In</Link>
              </div>

              <Footer />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
