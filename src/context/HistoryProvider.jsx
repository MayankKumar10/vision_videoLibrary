import React, {
  createContext,
  useReducer,
  useContext,
} from "react";
import {
  HistoryInitialState,
  HistoryReducer,
} from "../reducer/HistoryReducer";

const HistoryContext = createContext(HistoryInitialState);

function HistoryProvider({children}) {
  const [state, dispatch] = useReducer(
    HistoryReducer,
    HistoryInitialState
  );

  const addToHistory = (product) => {
    const updateHistory =
      state.HistoryVideos.concat(product);
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        HistoryVideos: updateHistory,
      },
    });
  };

  const removeFromHistory = (product) => {
    const updateHistory = state.HistoryVideos.filter(
      (currentProducts) =>
        currentProducts.name !== product.name
    );
    dispatch({
      type: "REMOVE_FROM_HISTORY",
      payload: {
        HistoryVideos: updateHistory,
      },
    });
  };

  const value = {
    total: state.total,
    HistoryVideos: state.HistoryVideos,
    addToHistory,
    removeFromHistory,
  };

  return (
    <>
      <HistoryContext.Provider value={value}>
        {children}
      </HistoryContext.Provider>
    </>
  );
}

const UseHistory = () => useContext(HistoryContext);

export {UseHistory, HistoryProvider};
