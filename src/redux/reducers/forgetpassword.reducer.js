const defaultState = {
    email: '',
    isEmailOtpVerified:false,
    isPasswordChanged:false
  };
  
  export const forgetPasswordReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "EMAIL_OTP_SENT":
          return {
            ...state,
            email: action.payload,
          };

          case "EMAIL_OTP_VERIFIED":
            return {
              ...state,
              isEmailOtpVerified: action.payload,
            };
      

            case "PASSWORD_CHANGED":
              return {
                ...state,
                isPasswordChanged: action.payload,
              };
        
      
      default:
        return state;
    }
  };
  