import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {
  MdThumbUp,
  MdOutlineWatchLater,
  MdPlaylistAdd,
  MdNotifications,
} from "react-icons/md";
import {WishlistButton} from "../WishList/WishlistButton.styled";
import {WatchLaterButton} from "../WatchLater/WatchLaterButton.styled";
import { useAuth, useUserData, useVideoData } from "../../context";
import { actionTypes } from "../../constant";
import { checkInPlaylist } from "../../filterFunctions";
import { PlaylistHook } from "../../hooks";
import { addToLikesAPI, addToWatchLaterAPI, removeLikesAPI, removeWatchLaterAPI } from "../../APIs";
import { Modal } from "../Modal";

export const VideoPage = () => {
  const {auth:{isAuth}} = useAuth();
  const navigate = useNavigate();
  const {videoId} = useParams();
  const {userData:{likesPlaylist, watchLaterPlaylist, notes }} = useUserData();
  const { SET_LIKES, SET_WATCHLATER, SET_NOTES } = actionTypes;
  const {videoDataState: {data}} = useVideoData()
  const video = data.find((video) => video.id === videoId)

  const videoNotes = notes?.filter((note)=> note._id === video._id)[0]?. vidNotes;
  const[opened, setOpened] = useState(false)
  const isInPlaylistLiked = checkInPlaylist(video, likesPlaylist);
  const isInPlaylistWatchLater = checkInPlaylist(video, watchLaterPlaylist);
  
   
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

  const {
    id,
    title,
    url,
    thumbnail,
    channel,
    profile,
    description,
    category,
    subscribers,
    views,
    uploadTime,
    playbackTime,
    likes,
  } = video;

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
      <div className="card-container1" key={id}>
        <section className="">
          <iframe
            className="reactPlayer"
            src={`https://www.youtube.com/embed/${url}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <span className="card-text-container flex">
          <h5>{title}</h5>
          <span className="card-container-price-icons card-description">
            <span className="videoDetailContainer">
              <h4>{views}</h4>
              <ul>
                <li>{uploadTime}</li>
              </ul>
            </span>
            <span className="videoIconsContainer">
              <div className='video-icon-cont'
               onClick={isAuth ? likeHandler : navigate('/login')}>
              <WishlistButton
                className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                isInState={isInPlaylistLiked}
              >
                <MdThumbUp size="25" />
              </WishlistButton>
              <h6>{likes}</h6>
              </div>
              
              <div className='video-icon-cont' onClick={setOpened}>
                <WishlistButton
                  className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                  isInState={''}
                >
                  <MdPlaylistAdd size="25" />
                </WishlistButton>
                <h6>SAVE</h6>
              </div>

              <div className='video-icon-cont' 
              onClick={isAuth ? watchLaterHandler : navigate('/login')}>
                <WatchLaterButton
                  className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                  isInWatch={isInPlaylistWatchLater}
                >
                  <MdOutlineWatchLater size="25" />
                </WatchLaterButton>
                <h6>WATCH LATER</h6>
              </div>

              {/* <>
                <WishlistButton
                  className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                  onClick=""
                  isInLiked={""}
                >
                  <FaShare size="25" />
                </WishlistButton>
                <h6>SHARE</h6>
              </> */}
               <Modal key={id} val={opened} setOpened={setOpened} video={video} />
            </span>
           
          </span>
          <hr />
          <span className="videoSubscribeContainer flex">
            <span className="channelDetail flex">
              <img
                className="AvatarImage box-shadow-round"
                src={profile}
                alt="profile"
              />
              <span className="channelSubscriber">
                <p>{channel}</p>
                <p>{subscribers}</p>
              </span>
            </span>

            <span className="channelSubscribe">
              <button
                id="myBtn"
                className="header-btn transparent-bg button-normal ButtonDomContainer icons-btn-hover buttonHoverShadow"
              >
                <Link
                  className="headerAnchorTag flex-column-center"
                  to=""
                  target="iframe-main-container"
                >
                  <span className="button-inner-txt">
                    Subscribe
                  </span>
                </Link>
              </button>

              <>
                <WishlistButton
                  className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                  onClick=""
                  isInLiked={""}
                >
                  <MdNotifications size="25" />
                </WishlistButton>
              </>
            </span>
          </span>
        </span>
      </div>
    </>
  );
};
