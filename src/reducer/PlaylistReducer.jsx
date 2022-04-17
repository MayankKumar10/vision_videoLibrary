const PlaylistInitialState = {
  playlists: [],
  activePlaylistId: null,
  modal: false,
  video: null,
  stateCreateBtn: false,
};

const updatePlaylists = (state, playlist) => {
  if (state.length !== 0) {
    const index = state.findIndex(
      (obj) => obj.id === playlist.id
    );
    state[index] = playlist;
    return [...state];
  } else {
    return [playlist];
  }
};

const PlaylistReducer = (state, {type, payload}) => {
  switch (type) {
    case "SET_PLAYLISTS":
      return {...state, playlists: payload};
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: updatePlaylists(
          [...state.playlists],
          payload
        ),
      };
    case "SET_SELECTED_PLAYLIST":
      return {...state, selectedPlaylistId: payload};
    case "SET_MODAL":
      return {...state, modal: payload};
    case "SET_VIDEO":
      return {...state, video: payload};
    case "SET_STATE_CREATE_BTN":
      return {...state, stateCreateBtn: payload};
    case "RESET":
      return {
        ...state,
        stateCreateBtn: false,
        video: null,
        modal: false,
      };

    default:
      return state;
  }
};

export {PlaylistReducer, PlaylistInitialState};
