import React, {useState, useEffect} from "react";
import {MdAddCircle, MdAddTask, MdOutlineMoreVert} from "react-icons/md";
import ReactPlayer from "react-player";
import {useNavigate} from "react-router-dom";
import { addToHistoryAPI, addToLikesAPI, 
  addToWatchLaterAPI, removeLikesAPI, 
  removeWatchLaterAPI, updateVideoCountAPI } from "../../APIs";
import { useAuth, useUserData, useVideoData } from "../../context";
import "../../styles/root.css";
import { actionTypes } from "../../constant/actionTypes";
import {checkInPlaylist} from '../../filterFunctions'
import { PlaylistHook } from "../../hooks";
import { Modal } from "../Modal";


function NormalCard({video}) {

  const{
    id,
    title,
    url,
    thumbnail,
    profile,
    channel,
    description,
    category,
    views,
    uploadTime,
    playbackTime,
    likes,
    noDetails,} = video


  
  const navigate = useNavigate();
  const {userData:{likesPlaylist, watchLaterPlaylist},} = useUserData()
  const {SET_WATCHLATER, SET_HISTORY, SET_LIKES, SET_VIDEOS} =actionTypes;
  const {videoDispatch} = useVideoData();
  const[openOption, setOpenOption] = useState(false);
  const [openedModal, setOpenedModal] = useState(false);
  
  const isInPlaylistLiked = checkInPlaylist(video, likesPlaylist);
  const isInPlaylistWatchLater = checkInPlaylist(video, watchLaterPlaylist);
  const {auth} = useAuth();

  const [addToLikeCall, addingToLike ] = PlaylistHook(
    addToLikesAPI,
    video,
    SET_LIKES,
    "Added To Likes"
  );

  const [removeLikeCall, removingLike ] = PlaylistHook(
    removeLikesAPI,
    video,
    SET_LIKES,
    "Remove from Likes"
  );

  const [addToWatchLaterCall, addingWatchLater ] = PlaylistHook(
    addToWatchLaterAPI,
    video,
    SET_WATCHLATER,
    "Added To WatchLater"
  );


  const [removeWatchLaterCall, removingWatchLater ] = PlaylistHook(
    removeWatchLaterAPI,
    video,
    SET_WATCHLATER,
    "Removed From WatchLater"
  );

  const [addToHistoryCall ] = PlaylistHook(
    addToHistoryAPI,
    video,
    SET_HISTORY,
    ""
  );

  const updateVideoHandler = async() =>{
    try{
      const res = await updateVideoCountAPI(video);
      if(res.status === 200){
        const videos = res.data.videos;
        videoDispatch({
          type: SET_VIDEOS,
          payload: {videos}
        })
      }
    }catch(err){
      //toast.error('There was a problem')
      console.log(err)
    }
  }

  const likeHandler = () =>{
    isInPlaylistLiked 
    ? removeLikeCall() 
    : addToLikeCall();
  }
  
  const watchLaterHandler = () =>{
    isInPlaylistWatchLater 
    ? removeWatchLaterCall() 
    : addToWatchLaterCall();
  }

  return (
    <>
        <div
          className="card-container buttonHoverShadow"
          key={id}
        >
          <Modal 
            val={openedModal}
            setOpened={setOpenedModal}
            video={video}
            key={video.id}
            />
          <section >
            <ReactPlayer
              controls
              url={`www.youtube.com/watch?v=${url}`}
              className="react-player"
              light={thumbnail}
              onClick={async()=>{
                updateVideoHandler();
                addToHistoryCall();
                navigate(`/videos/${id}`);
              }}
            />
          </section>
          <span className="card-text-container card-brand-text">
            <span className="card-container-price-icons card-footer">
              <span className="card-price">
                <img
                  className="AvatarImage box-shadow-round"
                  src={profile}
                  alt="profile"
                />
              </span>
              <h5>{title.substring(0, 25)}</h5>
              <span className="dropdown" onClick={()=>setOpenOption(!openOption)}>
                <MdOutlineMoreVert className="dropBtn" />
              </span>
            </span>
            {openOption && (
                <div className="open-model buttonHoverShadow">
                  <div
							class={`list-item flex-row gap-xs modal-align-center ${
								addingToLike || removingLike ? "btn-disabled" : ""
							}`}
							onClick={
								auth.isAuth ? () => likeHandler() : () => navigate("/login")
							}
						>
							{isInPlaylistLiked ? (
								<MdAddTask />
							) : (
								<MdAddCircle /> 
							)}
							Liked Videos
						</div>
						<div class={`list-item flex-row gap-xs modal-align-center${
								addingWatchLater || removingWatchLater
									? "btn-disabled"
									: ""
							}`}
							onClick={
								auth.isAuth
									? () => watchLaterHandler()
									: () => navigate("/login")
							}
						>
							{isInPlaylistWatchLater ? (
								<MdAddTask />
							) : (
								<MdAddCircle /> 
							)}
							Watch Later
						</div>
						<div class="list-item flex-row gap-xs modal-align-center"
							onClick={() => {
								if (auth.isAuth) {
									setOpenOption(false);
									setOpenedModal(true);
								} else {
									navigate("/login");
								}
							}}
						>
							<MdAddCircle />  other playlist
						</div>
            </div>
          )}
          </span>
          
        </div>
      
    </>
  );
}

export {NormalCard};
