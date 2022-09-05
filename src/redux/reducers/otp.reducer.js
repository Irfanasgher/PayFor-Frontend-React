const defaultState = {
    otp: false,
    emailOtp:false
  };
  
  export const otpReducer = (state = defaultState, action) => {
    switch (action.type) {

      case "OTP_VERIFIED":
        return {
          ...state,
          otp : true,
        };

        case "OTP_VERIFIED_EMAIL":
          return {
            ...state,
            emailOtp:true
          };
  


      default:
        return state;

    }
  };
  