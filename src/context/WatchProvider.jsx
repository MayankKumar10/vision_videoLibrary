import React, {
  createContext,
  useReducer,
  useContext,
} from "react";
import {
  WatchInitialState,
  WatchReducer,
} from "../reducer/WatchReducer";

const WatchContext = createContext(WatchInitialState);

function WatchProvider({children}) {
  const [state, dispatch] = useReducer(
    WatchReducer,
    WatchInitialState
  );

  const addToWatch = (product) => {
    const updateWatch = state.WatchProducts.concat(product);
    dispatch({
      type: "ADD_TO_WATCH",
      payload: {
        WatchProducts: updateWatch,
      },
    });
  };

  const removeFromWatch = (product) => {
    const updateWatch = state.WatchProducts.filter(
      (currentProducts) =>
        currentProducts.name !== product.name
    );
    dispatch({
      type: "REMOVE_FROM_WATCH",
      payload: {
        WatchProducts: updateWatch,
      },
    });
  };

  const value = {
    total: state.total,
    WatchProducts: state.WatchProducts,
    addToWatch,
    removeFromWatch,
  };

  return (
    <>
      <WatchContext.Provider value={value}>
        {children}
      </WatchContext.Provider>
    </>
  );
}

const UseWatch = () => useContext(WatchContext);

export {UseWatch, WatchProvider};
