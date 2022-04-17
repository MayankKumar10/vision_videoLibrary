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

  return (
    <>
      <PlaylistContext.Provider value={""}>
        {children}
      </PlaylistContext.Provider>
    </>
  );
}

const PlaylistProducts = () => useContext(PlaylistContext);

export {PlaylistProducts, PlaylistProvider};
