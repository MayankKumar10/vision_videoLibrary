import React from 'react'
import { actionTypes } from '../constant/actionTypes';

export const userDataReducer = (state,{type, payload}) => {
 
  const {
		SET_LIKES,
		SET_WATCHLATER,
		SET_HISTORY,
		SET_PLAYLISTS,
		SET_PLAYLIST,
		SET_NOTES,
	} = actionTypes;
 
  
  switch(type){
    case SET_LIKES:
      return {
        ...state,
        likesPlaylist: [...payload?.data?.likes]
      }
      case SET_WATCHLATER:
        return {
          ...state,
          watchLaterPlaylist: [...payload?.data?.watchLater]
        }
        case SET_HISTORY:
      return {
        ...state,
        history: [...payload?.data?.history]
      }
        case SET_NOTES:
      return {
        ...state,
        notes: [...payload?.data?.notes]
      }
      case SET_PLAYLISTS:
      return {
        ...state,
        playlists: [...payload?.data?.playlists]
      }
      case SET_PLAYLIST:
        const playlistVal = payload?.data?.playlist;
        const newPlaylist = state.playlists.map((currPlaylist)=>
        currPlaylist._id === playlistVal._id ? playlistVal : currPlaylist)
      return {
        ...state,
        playlists: newPlaylist
      }
    default :{
      return {...state}
    }
  }
 
}
