import React, {
  createContext,
  useReducer,
  useContext,
} from "react";
import {
  LikedInitialState,
  LikedReducer,
} from "../reducer/LikedReducer";

const LikedContext = createContext(LikedInitialState);

function LikedProvider({children}) {
  const [state, dispatch] = useReducer(
    LikedReducer,
    LikedInitialState
  );

  const addToLiked = (product) => {
    const updateLiked = state.LikedProducts.concat(product);
    dispatch({
      type: "ADD_TO_LIKED",
      payload: {
        LikedProducts: updateLiked,
      },
    });
  };

  const removeFromLiked = (product) => {
    const updateLiked = state.LikedProducts.filter(
      (currentProducts) =>
        currentProducts.name !== product.name
    );
    dispatch({
      type: "REMOVE_FROM_LIKED",
      payload: {
        LikedProducts: updateLiked,
      },
    });
  };

  const value = {
    total: state.total,
    LikedProducts: state.LikedProducts,
    addToLiked,
    removeFromLiked,
  };

  return (
    <>
      <LikedContext.Provider value={value}>
        {children}
      </LikedContext.Provider>
    </>
  );
}

const UseLiked = () => useContext(LikedContext);

export {UseLiked, LikedProvider};
