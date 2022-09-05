const defaultState = {
    isPaid: false,
  };
  
  export const installmentReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "INSTALLMENT_PAYOUT":
        return {
          ...state,
          isPaid: true,
        };      
      default:
        return state;
    }
  };
  