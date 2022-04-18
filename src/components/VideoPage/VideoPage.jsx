import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {AllVideos} from "../../context/ContextProducts";
import {
  MdThumbUp,
  MdThumbDown,
  MdOutlineWatchLater,
  MdPlaylistAdd,
  MdNotifications,
} from "react-icons/md";
import {FaShare} from "react-icons/fa";
import {WishlistButton} from "../WishList/WishlistButton.styled";
import {UsePlaylist} from "../../context/PlaylistProvider";
import {UseLiked} from "../../context/LikedProvider";
import {UseWatch} from "../../context/WatchProvider";
import {WatchLaterButton} from "../WatchLater/WatchLaterButton.styled";

export const VideoPage = () => {
  const {videoId} = useParams();
  const {productState} = AllVideos();
  const {data: videos, loading} = productState;

  const getVideosData = (arry, id) => {
    return arry.find((item) => item.id === id);
  };

  const video = getVideosData(videos, videoId);
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

  const {
    PlaylistVideos,
    addToPlaylist,
    removeFromPlaylist,
  } = UsePlaylist();

  const {LikedProducts, addToLiked, removeFromLiked} =
    UseLiked();
  const {WatchProducts, addToWatch, removeFromWatch} =
    UseWatch();

  const [isInPlaylist, setIsInPlaylist] = useState(false);

  const [isInLiked, setIsInLiked] = useState(false);

  const [isInWatch, setIsInWatch] = useState(false);

  const EffectFunc = (products, setIsInList) =>
    useEffect(() => {
      const productIsInList = products.find(
        (product) => product.title === title
      );

      if (productIsInList) {
        setIsInList(true);
      } else {
        setIsInList(false);
      }
    }, [products, setIsInList, title]);

  EffectFunc(PlaylistVideos, setIsInPlaylist);
  EffectFunc(WatchProducts, setIsInWatch);
  EffectFunc(LikedProducts, setIsInLiked);

  const product = {
    id,
    title,
    url,
    thumbnail,
    channel,
    profile,
    category,
    views,
    uploadTime,
    playbackTime,
    likes,
  };

  const handleCliked = (
    isInList,
    addFromList,
    removeFromList
  ) => {
    if (isInList) {
      removeFromList(product);
    } else {
      addFromList(product);
    }
  };

  const handlePlaylist = () =>
    handleCliked(
      isInPlaylist,
      addToPlaylist,
      removeFromPlaylist
    );

  const handleLiked = () =>
    handleCliked(isInLiked, addToLiked, removeFromLiked);

  const handleWatch = () =>
    handleCliked(isInWatch, addToWatch, removeFromWatch);

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
              <WishlistButton
                className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                onClick={handleLiked}
                isInState={isInLiked}
              >
                <MdThumbUp size="25" />
              </WishlistButton>
              <h6>{likes}</h6>

              <WishlistButton
                className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                onClick=""
                isInLiked={""}
              >
                <MdThumbDown size="25" />
              </WishlistButton>

              <h6>DISLIKE</h6>

              <>
                <WishlistButton
                  className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                  onClick={handlePlaylist}
                  isInState={isInPlaylist}
                >
                  <MdPlaylistAdd size="25" />
                </WishlistButton>
                <h6>SAVE</h6>
              </>

              <>
                <WatchLaterButton
                  className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                  onClick={handleWatch}
                  isInWatch={isInWatch}
                >
                  <MdOutlineWatchLater size="25" />
                </WatchLaterButton>
                <h6>WATCH LATER</h6>
              </>

              <>
                <WishlistButton
                  className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                  onClick=""
                  isInLiked={""}
                >
                  <FaShare size="25" />
                </WishlistButton>
                <h6>SHARE</h6>
              </>
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
