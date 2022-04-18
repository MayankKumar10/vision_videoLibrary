const PlaylistInitialState = {
  total: 0,
  PlaylistVideos: [],
};


const PlaylistReducer = (state, {type, payload}) => {
  switch (type) {
    case "ADD_TO_PLAYLIST":
      console.log("ADD_TO_PLAYLIST", payload.PlaylistVideos);
      return {
        ...state,
        PlaylistVideos: payload.PlaylistVideos,
      };
    case "REMOVE_FROM_PLAYLIST":
      console.log(
        "REMOVE_FROM_PLAYLIST",
        payload.PlaylistVideos
      );
      return {
        ...state,
        PlaylistVideos: payload.PlaylistVideos,
      };
    default:
      return {...state};
  }
};

export {PlaylistReducer, PlaylistInitialState};
