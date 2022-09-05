import "./index.css";
import { React,useEffect} from "react";
import { UserNavigation } from "../../component/userNavbar/disabledMenu";
import { useDispatch, useSelector } from "react-redux";
import { orderConfirmationEmail,orderConfirmationSms,installmentPayout,updatePaymentStatus } from "../../redux/actions";


export function ThankYou() {   
    const dispatch = useDispatch();
    const email = useSelector((state)=>state.orderReducer?.orders?.user?.email)
    const order = useSelector((state)=>state.orderReducer?.orders)
    

    
    async function allSettelment(){

      const {order_id,installment_payout_id} = JSON.parse(sessionStorage.getItem("userOrder"));
      
      // dispatching an action for payment detail successfull
      await dispatch(updatePaymentStatus({installment_id:Number(installment_payout_id),status:'fullfilled'}))

      // clear insllment payment
      await dispatch(installmentPayout({installment_payout_id}))
      
      // order confirmation email
      await dispatch(orderConfirmationEmail({order_id,email}))
      let phone = order?.user?.phone_number?.replace("+92","")
      
      // order confirmation sms
      // await dispatch(orderConfirmationSms({phone_number:"92"+phone.replace(0,""),order_id:Number(order_id),amount:order?.user?.orderDetail[0]?.installmentPayout[0]?.installment_amount}))
      await dispatch({type:'RESET_STORE'})
      setTimeout(async ()=>{
        await dispatch({type:'RESET_CARD_DATA'})
        await dispatch({type:'RESET_ORDER'})
        localStorage.clear();    
        sessionStorage.clear();
      },3000);
      
    }

    useEffect(()=>{
      allSettelment();
    },[])

  return (
    <div className="bodySegment">
      <UserNavigation />
      

          <div style={{ paddingTop: "20vh", height: "70vh" }}>
            <h2 className="text-center">THANK YOU</h2>
            <h5 className="text-center">
              Payment has been processed successfully
            </h5>
          </div>
      
    </div>
  );
}
