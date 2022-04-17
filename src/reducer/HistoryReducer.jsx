const HistoryInitialState = {
  total: 0,
  HistoryVideos: [],
};

const HistoryReducer = (state, {type, payload}) => {
  switch (type) {
    case "ADD_TO_HISTORY":
      console.log("ADD_TO_HISTORY", payload.HistoryVideos);
      return {
        ...state,
        HistoryVideos: payload.HistoryVideos,
      };
    case "REMOVE_FROM_HISTORY":
      console.log(
        "REMOVE_FROM_HISTORY",
        payload.HistoryVideos
      );
      return {
        ...state,
        HistoryVideos: payload.HistoryVideos,
      };
    default:
      return {...state};
  }
};

export {HistoryInitialState, HistoryReducer};
