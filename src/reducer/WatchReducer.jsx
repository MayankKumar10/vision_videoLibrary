const WatchInitialState = {
  total: 0,
  WatchProducts: [],
};

const WatchReducer = (state, {type, payload}) => {
  switch (type) {
    case "ADD_TO_WATCH":
      console.log("ADD_TO_WATCH", payload.WatchProducts);
      return {
        ...state,
        WatchProducts: payload.WatchProducts,
      };
    case "REMOVE_FROM_WATCH":
      console.log(
        "REMOVE_FROM_WATCH",
        payload.WatchProducts
      );
      return {
        ...state,
        WatchProducts: payload.WatchProducts,
      };
    default:
      return {...state};
  }
};

export {WatchInitialState, WatchReducer};
