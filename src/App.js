import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome } from "./page/welcome";
import { SignIn } from "./page/signin";
import { Signup } from "./page/signup";
import { OTP } from "./page/signup/otp";
import { UserBio } from "./page/signup/userBio";
import { IdentityProof } from "./page/signup/identityProof";
import { IdentityReceive } from "./page/signup/identityReceive";
import { Order } from "./page/order";
import { Profile } from "./page/profile";
import { Wishlist } from "./page/wishlist";
import { Payment } from "./page/payment";
import { RemoveCard } from "./page/payment/removeCard";
import { Shop } from "./page/shop";
import { CheckOut } from "./page/checkout";
import { CheckOutNop } from "./page/checkout/CheckOutNop.jsx";
import { GetParams } from "./page/checkout/GetParams";
import { ForgetPassword } from "./page/signin/forgetPassword";
import { ThankYou } from "./page/checkout/thankYou";
import { EmailOtp } from "./page/signin/emailOtp";
import { ResetPassword } from "./page/signin/resetPassword";
import { Failure } from "./page/checkout/failure";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/*" exact element={<Welcome />} />
        <Route path="/signin/*" exact element={<SignIn />} />
        <Route path="/forgetPassword/*" exact element={<ForgetPassword />} />
        <Route path="/emailVerification/*" exact element={<EmailOtp />} />
        <Route path="/reset/*" exact element={<ResetPassword />} />
        
        <Route path="/signup/*" exact element={<Signup />} />
        <Route path="/signup/otp/*" exact element={<OTP />} />
        <Route path="/signup/bio/*" exact element={<UserBio />} />
        <Route path="/signup/identity/*" exact element={<IdentityProof />} />
        <Route path="/signup/final/*" exact element={<IdentityReceive />} />

        <Route path="/user/profile/*" exact element={<Profile />} />
        <Route path="/user/order/*" exact element={<Order />} />
        <Route path="/user/wishlist/*" exact element={<Wishlist />} />
        <Route path="/user/payment/*" exact element={<Payment />} />
        <Route
          path="/user/payment/removeCard/*"
          exact
          element={<RemoveCard />}
        />
        <Route path="/user/shop/*" exact element={<Shop />} />
        <Route path="/user/checkout/*" exact element={<CheckOut />} />
        <Route path="/nopcheckout/:user_id/:order_id/:installment_payout_id/:amount/:currency" exact element={<GetParams />} />
        <Route path="/paynow" exact element={<CheckOutNop />} />
        <Route path="/success/*" exact element={<ThankYou/>} />
        <Route path="/fail/*" exact element={<Failure/>} />
      </Routes>
    </Router>
  );
}

export default App;
