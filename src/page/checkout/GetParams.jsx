import { React, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export function GetParams() {
    const dispatch = useDispatch();
    const {user_id,order_id,installment_payout_id,amount,currency} = useParams();
    dispatch({type:'RESET_STORE'})

    useEffect(()=>{
      sessionStorage.clear();
      localStorage.clear();
      sessionStorage.setItem("userOrder",JSON.stringify({user_id,order_id,installment_payout_id,amount,currency}));
    },[]);
    const navigate=useNavigate();
    useEffect(()=>{
        
        navigate("/paynow")
    },[])

  return (
    null
  );
}
