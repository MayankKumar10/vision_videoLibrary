import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { addToHistoryAPI, removeFromHistoryAPI, removeFromPlaylistAPI, removeLikesAPI, removeWatchLaterAPI, updateVideoCountAPI } from "../../APIs";
import { actionTypes } from "../../constant";
import { CustomPlaylist, PlaylistHook } from "../../hooks";
import {AddVideos} from '../../assets/images'
import "../../styles/root.css";
import { useVideoData } from "../../context";

export function PlaylistCard({video, playlistTitle, playlist}) {
const navigate = useNavigate()
const {videoDispatch} = useVideoData()
const {SET_LIKES, SET_PLAYLIST, SET_WATCHLATER, SET_HISTORY, SET_VIDEOS} = actionTypes;

const [removePlaylistsCall] = CustomPlaylist(
  removeFromPlaylistAPI,
  playlist,
  SET_PLAYLIST,
  `Removed from Playlist`
)

const [removeLikeCall] = PlaylistHook(
  removeLikesAPI,
  video,
  SET_LIKES,
  `Removed from Likes`
)

const [removeWatchLaterCall] = PlaylistHook(
  removeWatchLaterAPI,
  video,
  SET_WATCHLATER,
  `Removed from WatchLater`
)

  const [removeHistoryCall] = PlaylistHook(
  removeFromHistoryAPI,
  video,
  SET_HISTORY,
  `Removed from History`
  )

  const [addToHistoryCall] = PlaylistHook(
    addToHistoryAPI,
    video,
    SET_HISTORY,
    ''
  );

  const removeVideoHandler = (e) =>{
    e.stopPropagation();
    switch(playlistTitle){
      case 'History':
        removeHistoryCall();
        break;
      case 'Watch Later':
        removeWatchLaterCall();
        break;  
      case 'Likes':
        removeLikeCall();
        break;
      default: 
        removePlaylistsCall();
    }
  }


  const updateVideoCountCall = async() =>{
    try{
      const res = await updateVideoCountAPI(video);
      if(res.status === 200){
        const videos = res.data.videos
        
        videoDispatch({
          type: SET_VIDEOS,
          payload: {videos}
        })
      }
    }catch(err){
      //toast.error('There was some Problem')
      console.log(err)
    }
  }



  return (
    <>   
    <div className="wishlist-card-container">
            <div className="card-container-horizontal flex-column-start">
              <section className="view-card flex-column-center">
                <section className="flex-row-start"  onClick={async()=>{
                     updateVideoCountCall();
                     addToHistoryCall();
                     navigate(`/videos/${video.id}`)
                    }}>
                  <img
                    className="playlist-img"
                    src={video.thumbnail}
                    alt='playlist-img'
                  />
                 
                </section>
              </section>
              
            </div>
            
            <span className="card-text-container cart-brand-text">
              <span className="card-txt-length">             
                <b><i><h3>{video.title}</h3></i></b>
                <span className="rating-container">
                </span>
              </span>
            </span>

            <button
              className="delete-icon 
            buttonHoverShadow card-wishlist-icons"
              onClick={(e) => removeVideoHandler(e)}
            >
              <i className="material-icons cart-material-icons">
                delete
              </i>
            </button>
          </div>
       
    </>
  );
}
