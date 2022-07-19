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
 
  const {likes, watchLater, history, 
    notes, playlist ,playlists } = payload.data;

  switch(type){
    case SET_LIKES:
      return {
        ...state,
        likesPlaylist: [...likes]
      }
      case SET_WATCHLATER:
        return {
          ...state,
          watchLaterPlaylist: [...watchLater]
        }
        case SET_HISTORY:
      return {
        ...state,
        history: [...history]
      }
        case SET_NOTES:
      return {
        ...state,
        notes: [...notes]
      }
      case SET_PLAYLISTS:
      return {
        ...state,
        playlists: [...playlists]
      }
      case SET_PLAYLIST:
        const playlistVal = playlist;
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
