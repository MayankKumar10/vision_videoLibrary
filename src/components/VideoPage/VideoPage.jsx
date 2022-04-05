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
import {PlaylistProducts} from "../../context/CartProvider";
import {UseLiked} from "../../context/LikedProvider";

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
  } = PlaylistProducts();

  const {LikedProducts, addToLiked, removeFromLiked} =
    UseLiked();

  const [isInPlaylist, setIsInPlaylist] = useState(false);

  const [isInLiked, setIsInLiked] = useState(false);

  useEffect(() => {
    const productIsInPlaylist = PlaylistVideos.find(
      (product) => product.title === title
    );

    const productIsInWishlist = LikedProducts.find(
      (product) => product.title === title
    );

    if (productIsInWishlist) {
      setIsInLiked(true);
    } else {
      setIsInLiked(false);
    }

    if (productIsInPlaylist) {
      setIsInPlaylist(true);
    } else {
      setIsInPlaylist(false);
    }
  }, [LikedProducts, PlaylistVideos, title]);

  const handleClick = () => {
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

    if (isInPlaylist) {
      removeFromPlaylist(product);
      console.log("remove", isInPlaylist);
    } else {
      addToPlaylist(product);
      console.log("add", isInPlaylist);
    }
  };

  const handleLiked = () => {
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

    if (isInLiked) {
      removeFromLiked(product);
      console.log("remove Liked", isInLiked);
    } else {
      console.log("Add Liked", isInLiked);
      addToLiked(product);
    }
  };

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
                isInLiked={isInLiked}
              >
                <MdThumbUp size="25" />
              </WishlistButton>
              <h6>{likes}</h6>

              <WishlistButton
                className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                onClick=""
                isInLiked={isInLiked}
              >
                <MdThumbDown size="25" />
              </WishlistButton>

              <h6>DISLIKE</h6>

              <>
                <WishlistButton
                  className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                  onClick={handleClick}
                  isInLiked={isInLiked}
                >
                  <MdPlaylistAdd size="25" />
                </WishlistButton>
                <h6>SAVE</h6>
              </>

              <>
                <WishlistButton
                  className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                  onClick=""
                  isInLiked={isInLiked}
                >
                  <MdOutlineWatchLater size="25" />
                </WishlistButton>
                <h6>WATCH LATER</h6>
              </>

              <>
                <WishlistButton
                  className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
                  onClick=""
                  isInLiked={isInLiked}
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
                  isInLiked={isInLiked}
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
