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
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "../../component/navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import {Link} from 'react-router-dom'
import { Footer } from "../../component/footer";
import { signUp } from "../../redux/actions";

export function IdentityProof() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nic1, setnic1] = useState(null);
  const [nic2, setnic2] = useState(null);

  const data = useSelector((state) => state.signupReducer);

  const setImg = (e) => {
    setnic1(URL.createObjectURL(e.target.files[0]));
  };

  const setImg2 = (e) => {
    setnic2(URL.createObjectURL(e.target.files[0]));
  };

  const redirect = () => {
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

    if (nic1 !== null && nic2 !== null) {
      dispatch(signUp(signUpData));
      navigate("/signup/final/");
    } else {
      toast.warn("Please Select Images");
    }
  };

  return (
    <div className="bodySegment">
      <Navigation />

      <Container fluid>
        <Row>
          <Col>
            <div className="navtypo">Proof of Identity</div>
            <div className="navsubtypo" style={{ marginTop: "-26px" }}>
              Upload your National Identity Card Image
            </div>
            <div className="minitypo" style={{ marginBottom: "30px" }}>
              Each Completed document will be saved
            </div>

            <Form className="identityform">
              <div className="d-flex " style={{ columnGap: "26px" }}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Name"
                  className="mb-2"
                >
                  <Form.Control
                    type="text"
                    placeholder="abc"
                    readOnly
                    defaultValue={data.first_name}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your NIC Number"
                  className="mb-2"
                >
                  <Form.Control
                    type="text"
                    placeholder="abc"
                    readOnly
                    defaultValue={data.nic}
                  />
                </FloatingLabel>
              </div>

              <div
                className="d-flex justify-content-center"
                style={{ columnGap: "26px" }}
              >
                <div
                  className="box"
                  style={{ backgroundImage: `url(${nic1})` }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                  >
                    <g
                      id="Group_4181"
                      data-name="Group 4181"
                      transform="translate(-129.643 -46.643)"
                    >
                      <g
                        id="Ellipse_249"
                        data-name="Ellipse 249"
                        transform="translate(129.643 46.643)"
                        fill="none"
                        stroke="#681dfe"
                        strokeWidth="2"
                      >
                        <circle cx="31" cy="31" r="31" stroke="none" />
                        <circle cx="31" cy="31" r="30" fill="none" />
                      </g>
                      <path
                        id="Symbol"
                        d="M2982.461,197.52a1.95,1.95,0,0,0,1.934-1.909V170.486l-.146-3.679,1.664,1.738,3.7,3.964a1.788,1.788,0,0,0,1.32.588,1.711,1.711,0,0,0,1.785-1.633c0-.037,0-.071,0-.1a1.715,1.715,0,0,0-.562-1.273l-8.272-7.974a1.855,1.855,0,0,0-2.838,0l-8.273,7.974a1.73,1.73,0,0,0-.588,1.273,1.7,1.7,0,0,0,1.668,1.738h.094a1.8,1.8,0,0,0,1.345-.588l3.721-3.964,1.662-1.738-.168,3.679V195.61A1.97,1.97,0,0,0,2982.461,197.52Z"
                        transform="translate(-2822.352 -101.833)"
                        fill="#6801fe"
                      />
                    </g>
                  </svg>

                  <div className="text">
                    Upload front side <br />
                    of the NIC Image here {"{accepted formats jpg,jpeg,png}"}
                  </div>
                  <input
                    type="file"
                    className="file-input"
                    onChange={(e) => setImg(e)}
                    accept=".jpg,.jpeg,.png"
                  />
                </div>

                <div
                  className="box"
                  style={{ backgroundImage: `url(${nic2})` }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                  >
                    <g
                      id="Group_4181"
                      data-name="Group 4181"
                      transform="translate(-129.643 -46.643)"
                    >
                      <g
                        id="Ellipse_249"
                        data-name="Ellipse 249"
                        transform="translate(129.643 46.643)"
                        fill="none"
                        stroke="#681dfe"
                        strokeWidth="2"
                      >
                        <circle cx="31" cy="31" r="31" stroke="none" />
                        <circle cx="31" cy="31" r="30" fill="none" />
                      </g>
                      <path
                        id="Symbol"
                        d="M2982.461,197.52a1.95,1.95,0,0,0,1.934-1.909V170.486l-.146-3.679,1.664,1.738,3.7,3.964a1.788,1.788,0,0,0,1.32.588,1.711,1.711,0,0,0,1.785-1.633c0-.037,0-.071,0-.1a1.715,1.715,0,0,0-.562-1.273l-8.272-7.974a1.855,1.855,0,0,0-2.838,0l-8.273,7.974a1.73,1.73,0,0,0-.588,1.273,1.7,1.7,0,0,0,1.668,1.738h.094a1.8,1.8,0,0,0,1.345-.588l3.721-3.964,1.662-1.738-.168,3.679V195.61A1.97,1.97,0,0,0,2982.461,197.52Z"
                        transform="translate(-2822.352 -101.833)"
                        fill="#6801fe"
                      />
                    </g>
                  </svg>

                  <div className="text">
                    Upload back side <br />
                    of the NIC Image here  {"{accepted formats jpg,jpeg,png}"}
                  </div>
                  <input
                    type="file"
                    className="file-input"
                    onChange={(e) => setImg2(e)}
                    accept=".jpg,.jpeg,.png"
                  />
                </div>
              </div>

              <Button
                className="simplebtn mt-3 "
                onClick={redirect}
                style={{ width: "295px" }}
              >
                Submit
              </Button>

              <Footer />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
