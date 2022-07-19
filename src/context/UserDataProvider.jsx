import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { getAllPlaylistAPI, getHistoryAPI, getLikesAPI, getPlaylistAPI, getWatchLaterAPI } from '../APIs';
import { actionTypes } from '../constant/actionTypes';
import { userDataReducer } from '../reducer';
import { useAuth } from './AuthProvider';

const userContext = createContext();
const useUserData = () => useContext(userContext);

const UserDataProvider = ({children}) => {

  const initialState = {
    likesPlaylist: [],
    watchLaterPlaylist: [],
    history: [],
    playlists:[],
    notes: [],
  }

  const[userData, userDataDispatch] = useReducer(
    userDataReducer,
    initialState
  )

  const[isLoadingHistory, setIsLoadingHistory] = useState(false);
  const[isLoadingLikes, setIsLoadingLikes] = useState(false);
  const[isLoadingWatchLater, setIsLoadingWatchLater] = useState(false);
  const[isLoadingPlaylist, setIsLoadingPlaylist] = useState(false);

  const{
    SET_HISTORY,
    SET_LIKES,
    SET_WATCHLATER,
    SET_PLAYLIST,
  } = actionTypes;

const {auth} = useAuth();


  useEffect(()=>{
    auth.isAuth && 
    (async()=>{
      setIsLoadingLikes(true);
      try{
        const res = await getLikesAPI(auth.vision_token);
        
        if(res.status===200){
          userDataDispatch({
            type: SET_LIKES,
            payload:{data: res.data},
          })
          console.log('likes data:',res.data)
          setIsLoadingLikes(false)
        }
      }catch(err){
        console.log('Error in Likes', err)
      }
    })()

    auth.isAuth && (async()=>{
      setIsLoadingHistory(true);
      try{
        const res = await getHistoryAPI(auth.vision_token);
        if(res.status === 200){
          userDataDispatch({
            type: SET_HISTORY,
            payload: {data: res.data},
          })
          console.log('history data:',res.data)
          setIsLoadingHistory(false);
        }
      }catch(err){
        console.log(err)
      }
    })()

    auth.isAuth && (async()=>{
      setIsLoadingWatchLater(true);
      try{
        const res = await getWatchLaterAPI(auth.vision_token);
        
        if(res.status === 200){
          userDataDispatch({
            type: SET_WATCHLATER,
            payload: {data: res.data},
          })
          console.log('res.data:',res.data)
          setIsLoadingWatchLater(false);
        }
      }catch(err){
        console.log(err)
      }
    })()

    auth.isAuth && (async()=>{
      setIsLoadingPlaylist(true);
      try{
        const res = await getAllPlaylistAPI(auth.vision_token);
        if(res.status === 200){
          userDataDispatch({
            type: SET_PLAYLIST,
            payload: {data: res.data},
          })
          setIsLoadingPlaylist(false);
        }
      }catch(err){
        console.log(err)
      }
    })()
  },[auth.isAuth])

  return (
    <userContext.Provider value={{
      userData,
      userDataDispatch,
      isLoadingLikes,
      isLoadingWatchLater,
      isLoadingHistory,
      isLoadingPlaylist,
    }}>
      {children}
    </userContext.Provider>
  )
}

export {useUserData, UserDataProvider}