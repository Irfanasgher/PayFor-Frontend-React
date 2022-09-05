import { React, useState } from "react";
import { Modal, Button, FloatingLabel, Form, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "./index.css";
import terminate from "../../assets/images/terminate.png";
import { addUserCard } from "../../redux/actions";

export function NeedHelp(props) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading,setLoading] = useState(false)
  const dispatch = useDispatch();

  const handelForm = (e) => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
  };


  return (
    <Modal {...props} size="md" centered>
      <Modal.Body className="content">
        <img
          src={terminate}
          style={{ width: "30px", height: "30px" }}
          className="terminated"
          onClick={() => props.onHide()}
          alt="shopImg"
        />

        <div className="popupTitle">Need Help</div>

        <Col lg={12} sm={6}>
          <Form className="form" onSubmit={handelForm}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-2"
            >
              <Form.Control
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
            controlId="floatingInput"
            label="Subject"
            className="mb-4"
            >
            <Form.Control
                type="text"
                placeholder="abc"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            {/* <span id="errmsg" style={{color:'red',fontSize:'14px'}}>asd</span> */}
            </FloatingLabel>

            <FloatingLabel
            controlId="floatingInput"
            label="Message"
            className="mb-4"
            >
            <Form.Control
                as="textarea"
                type="text"
                rows={20}
                placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            {/* <span id="errmsg" style={{color:'red',fontSize:'14px'}}>asd</span> */}
            </FloatingLabel>



            <Button
              type="submit"
              className="simplebtn mt-4 mb-4"
              size="lg"
              style={{ width: "100%" }}
              disabled={isLoading}
            >
              {isLoading?"wait...":
              "Send"
              }
            </Button>
          </Form>
        </Col>
      </Modal.Body>
    </Modal>
  );
}
