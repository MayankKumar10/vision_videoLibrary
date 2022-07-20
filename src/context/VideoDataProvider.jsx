import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { getCategoriesAPI, getVideoListingAPI } from '../APIs';
import { actionTypes } from '../constant/actionTypes';
import {videoDataReducer} from '../reducer'


const VideoContext = createContext();
const useVideoData = () => useContext(VideoContext);

const VideoDataProvider = ({children}) => {
 
 const initialState = {
  data: [],
  categories: [],
  selectedCategory: "",
  sortBy: "",
  searchText: "",
 }

 const [videoDataState, videoDispatch] = useReducer(videoDataReducer, initialState )
 
 const [videoLoader, setVideoLoader] = useState(false);
 const [videoError, setVideoError] = useState(false);
 const {LOAD_DATA} = actionTypes;

 useEffect(()=>{
  (async()=>{
    try{
      const res = await getVideoListingAPI();
      const resCat = await getCategoriesAPI();
      setVideoLoader(true);
      
      if(res.status === 200){
        const videos = res.data.videos;
        const categories = resCat.data.categories;
        videoDispatch({
          type: LOAD_DATA,
          payload: {videos, categories}
        });
        setVideoLoader(false);
        setVideoError(false);
      }

    }catch(err){
      setVideoError(true);
    }
  })();
 },[])




  return (
    <VideoContext.Provider value={{
      videoDataState,
      videoDispatch,
      videoLoader,
      videoError,
    }}>
      {children}
    </VideoContext.Provider>
  )
}

export {useVideoData, VideoDataProvider}