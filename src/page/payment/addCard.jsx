import { React, useState } from "react";
import { Modal, Button, FloatingLabel, Form, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "./popup.css";
import terminate from "../../assets/images/terminate.png";
import { addUserCard } from "../../redux/actions";

export function AddCard(props) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCVV] = useState("");
  const [isForPayment, setIsForPayment] = useState(false);
  const [isPrimary, setIsPrimary] = useState(false);

  const dispatch = useDispatch();

  const handelForm = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      cardNumber !== "" &&
      month !== "" &&
      year !== "" &&
      cvv !== ""
    ) {
      const user = {
        user_id: 6,
        card_number: cardNumber,
        cvv: cvv,
        expiry_month: month,
        expiry_year: year,
        card_holder_name: name,
        isPrimary: isPrimary ? "1" : "0",
        isForPayment: isForPayment ? "1" : "0",
      };

      dispatch(addUserCard(user));
      props.onHide();
    } else {
      toast("All Fields are mandatory");
    }
  };

  const setCard=(val)=>{
    const cardRegx = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/
    if(!cardRegx.test(val) && val.length>=16){
      toast.warn("Please Enter valid card number")
    }
    if(val.length<=16){
    setCardNumber(val);}
  }

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Body className="content">
        <img
          src={terminate}
          style={{ width: "30px", height: "30px" }}
          className="terminated"
          onClick={() => props.onHide()}
          alt="shopImg"
        />

        <div className="popupTitle">Add a Card</div>

        <Col lg={12} sm={6}>
          <Form className="form" onSubmit={handelForm}>
            <FloatingLabel
              controlId="floatingInput"
              label="Name of the Card Holder"
              className="mb-2"
            >
              <Form.Control
                type="text"
                placeholder="abc"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Card Number"
              className="mb-4"
            >
              <Form.Control
                type="number"
                placeholder="abc"
                value={cardNumber}
                onChange={(e) => setCard(e.target.value)}
              />
              {/* <span id="errmsg" style={{color:'red',fontSize:'14px'}}>asd</span> */}
            </FloatingLabel>


            <label>Expiry Date</label>
            <div className="d-flex expiryDate" style={{ columnGap: "21px" }}>
              <FloatingLabel
                controlId="floatingInput"
                label="MM"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="+923xxxxxxxxx"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Year"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="+923xxxxxxxxx"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="CVV"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="+923xxxxxxxxx"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                />
              </FloatingLabel>
            </div>

            <div className="d-flex gap-2 mt-4 signUpCheck">
              <input
                type="checkbox"
                checked={isForPayment}
                onChange={() => setIsForPayment(!isForPayment)}
              />
              <div className="checkmark"></div>
              <span style={{ fontSize: "15px", color: "#658CC5" }}>
                Save for payment process
              </span>
            </div>

            <div className="d-flex gap-2 mt-4 signUpCheck">
              <input
                type="checkbox"
                checked={isPrimary}
                onChange={() => setIsPrimary(!isPrimary)}
              />
              <div className="checkmark"></div>{" "}
              <span style={{ fontSize: "15px", color: "#658CC5" }}>
                Make this primary
              </span>
            </div>

            <Button
              type="submit"
              className="simplebtn mt-4 mb-4"
              size="lg"
              style={{ width: "100%" }}
            >
              Add Card
            </Button>
          </Form>
        </Col>
      </Modal.Body>
    </Modal>
  );
}
