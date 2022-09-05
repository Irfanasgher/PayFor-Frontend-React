const defaultState = {
  orders: [],
};
// const dispatch = useDispatc


export const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ORDERS_LIST_BY_ID_SUCCESSFULLY":
      return {
        ...state,
        orders: action.payload,
      };
    
    case "GET_ORDER_BY_ID":
        return {
          ...state,
          orders: action.payload,
        }
    case "RESET_ORDER":
      return{
        ...state,
        orders:[]
      }

    default:
      return state;
  }
};
