const defaultState = {
  store: "",
};

export const storeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_STORES_SUCCESSFULLY":
      return {
        ...state,
        store: action.payload,
      };
    default:
      return state;
  }
};
