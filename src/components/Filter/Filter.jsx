import React from "react";

import {
  MdFavorite,
  MdHome,
  MdVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
  MdPlaylistAdd,
  MdNotifications,
} from "react-icons/md";
import {Link} from "react-router-dom";
import {WishlistButton} from "../WishList/WishlistButton.styled";

export function Filter() {
  return (
    <>
      <nav className="filter-container box-shadow col-1">
        <form>
          <div className="videoLikeContainer ">
            <WishlistButton
              className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
              onClick=""
              value="Home"
            >
              <Link to="/">
                <MdHome size="25" />
              </Link>
            </WishlistButton>
            <h5>Home</h5>
          </div>

          <div className="videoLikeContainer">
            <WishlistButton
              className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
              onClick=""
              value="Home"
            >
              <Link to="/playlist">
                <MdVideoLibrary size="25" />
              </Link>
            </WishlistButton>
            <h5>Playlist</h5>
          </div>

          <div className="videoLikeContainer">
            <WishlistButton
              className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
              onClick=""
              value="Home"
            >
              <Link to="/likedlist">
                <MdFavorite size="25" />
              </Link>
            </WishlistButton>
            <h5>Liked Videos</h5>
          </div>

          <div className="videoLikeContainer">
            <WishlistButton
              className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
              onClick=""
              value="Home"
            >
              <Link to="/watchLater">
                <MdOutlineWatchLater size="25" />
              </Link>
            </WishlistButton>

            <h5>Watch Later</h5>
          </div>

          <div className="videoLikeContainer">
            <WishlistButton
              className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
              onClick=""
              value="Home"
            >
              <Link to="/history_page">
                <MdHistory size="25" />
              </Link>
            </WishlistButton>

            <h5>History</h5>
          </div>
        </form>
      </nav>
    </>
  );
}
