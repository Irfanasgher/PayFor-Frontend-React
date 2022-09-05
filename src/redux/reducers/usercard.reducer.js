const defaultState = {
  cardData: {},
  isRedirect:false,
  redirectLink:null
};

export const userCardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_USER_CARD":
      return {
        ...state,
        cardData: action.payload.cards,
      };
    case "DELETE_USER_CARD":
      return {
        ...state,
        cardData: {},
      };
    case "ADD_USER_CARD":
      return {
        ...state,
        cardData: action.payload.cards,
      };
    case "ADD_CARD":
      return {
        ...state,
        cardData: action.payload,
      };
    
    case "PAYMENT_SUCCESS":
      return{
        ...state,
        cardData:{},
        isRedirect:true
      }

    case "RESET_CARD_DATA":
      return {
        ...state,
        cardData:{},
        isRedirect:false
      }

    case "3D_SECURE":
      return{
        ...state,
        redirectLink:action.payload
      }

    default:
      return state;
  }
};
