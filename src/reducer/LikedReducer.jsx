const LikedInitialState = {
  total: 0,
  LikedProducts: [],
};

const LikedReducer = (state, {type, payload}) => {
  switch (type) {
    case "ADD_TO_LIKED":
      console.log("ADD_TO_LIKED", payload.LikedProducts);
      return {
        ...state,
        LikedProducts: payload.LikedProducts,
      };
    case "REMOVE_FROM_LIKED":
      console.log(
        "REMOVE_FROM_LIKED",
        payload.LikedProducts
      );
      return {
        ...state,
        LikedProducts: payload.LikedProducts,
      };
    default:
      return {...state};
  }
};

export {LikedInitialState, LikedReducer};
