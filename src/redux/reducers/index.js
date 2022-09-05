import { combineReducers } from "redux";
import { signInReducer } from "./signIn.reducer";
import { signupReducer } from "./signup.reducer";
import { storeReducer } from "./store.reducer";
import { orderReducer } from "./order.reducer";
import { userCardReducer } from "./usercard.reducer";
import {installmentReducer} from "./installment.reducer";
import { otpReducer } from "./otp.reducer";
import {forgetPasswordReducer} from './forgetpassword.reducer';

const appReducer = combineReducers({
  forgetPasswordReducer,
  otpReducer,
  userCardReducer,
  signInReducer,
  signupReducer,
  storeReducer,
  orderReducer,
  installmentReducer
});

const rootReducer = (state,action)=>{

  if (action.type === 'RESET_STORE') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
  
}

export default rootReducer;
