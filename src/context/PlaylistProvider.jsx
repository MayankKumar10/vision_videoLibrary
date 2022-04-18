import React, {
  createContext,
  useContext,
  useReducer,
} from "react";
import {
  PlaylistInitialState,
  PlaylistReducer,
} from "../reducer/PlaylistReducer";

const PlaylistContext = createContext(PlaylistInitialState);

function PlaylistProvider({children}) {
  const [state, dispatch] = useReducer(
    PlaylistReducer,
    PlaylistInitialState
  );

  const addToPlaylist = (product) => {
    const updatePlaylist =
      state.PlaylistVideos.concat(product);
    dispatch({
      type: "ADD_TO_PLAYLIST",
      payload: {
        PlaylistVideos: updatePlaylist,
      },
    });
  };

  const removeFromPlaylist = (product) => {
    const updatePlaylist = state.PlaylistVideos.filter(
      (currentVideos) => currentVideos.name !== product.name
    );
    dispatch({
      type: "REMOVE_FROM_PLAYLIST",
      payload: {
        PlaylistVideos: updatePlaylist,
      },
    });
  };

  const value = {
    total: state.total,
    PlaylistVideos: state.PlaylistVideos,
    addToPlaylist,
    removeFromPlaylist,
  };

  return (
    <>
      <PlaylistContext.Provider value={value}>
        {children}
      </PlaylistContext.Provider>
    </>
  );
}

const UsePlaylist = () => useContext(PlaylistContext);

export {UsePlaylist, PlaylistProvider};
