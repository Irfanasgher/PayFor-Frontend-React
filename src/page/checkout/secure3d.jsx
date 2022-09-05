import { React, useEffect, useState } from "react";
import { Modal, Button, FloatingLabel, Form, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import "./popup.css";

export function Secure3D(props) {
  const dispatch = useDispatch();
  
  useEffect( async()=>{
    await dispatch({type:'PAYMENT_SUCCESS'});
    window.location=props.link;
  },[])
  return (
    null
    // <Modal show={true} className="iframe3dSecure"  centered>
    //       <iframe src={props.link} style={{height:'60vh'}} ></iframe>
    // </Modal>
  );
}
