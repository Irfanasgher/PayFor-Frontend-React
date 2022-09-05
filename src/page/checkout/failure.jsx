import "./index.css";
import { React,useEffect} from "react";
import { UserNavigation } from "../../component/userNavbar/disabledMenu";
import { updatePaymentStatus,paymentFailed,paymentFailedEmail } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";


export function Failure() {   
  const dispatch = useDispatch();
  const email = useSelector((state)=>state.orderReducer?.orders?.user?.email)
  const order = useSelector((state)=>state.orderReducer?.orders)

  async function allSettelment(){

    const {order_id,installment_payout_id,phone} = JSON.parse(sessionStorage.getItem("userOrder"));
    

    const paymentFailedData = {
      phone:order?.user?.phone_number,
      order_id
    }

    await dispatch(paymentFailed(paymentFailedData))

    // dispatching an action for payment detail successfull
    await dispatch(updatePaymentStatus({installment_payout_id:Number(installment_payout_id),status:'failed'}))

    // failure email

    await dispatch(paymentFailedEmail(email))


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
            <h2 className="text-center">Transaction Failed</h2>
            <h5 className="text-center mt-3">
                Unfortunately, we're unable to charge your payment against your payfor order. <br/> Please check your email we have sent you a link to make the payment
            </h5>
          </div>
      
    </div>
  );
}
