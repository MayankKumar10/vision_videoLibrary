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
          
          <Link className="videoLikeContainer" to="/">
            <WishlistButton
              className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage flex-row-center"
              onClick=""
              value="Home"
            >
                <MdHome size="25" />
            </WishlistButton>
            <h5>Home</h5>
            </Link>
          

          
          <Link className="videoLikeContainer" to="/playlist">
            <WishlistButton
              className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage flex-row-center"
              onClick=""
              value="Home"
            >
                <MdVideoLibrary size="25" />
            </WishlistButton>
            <h5>Playlist</h5>
            </Link>
          

          
          <Link className="videoLikeContainer" to="/likedlist">
            <WishlistButton
              className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage flex-row-center"
              onClick=""
              value="Home"
            >
                <MdFavorite size="25" />    
            </WishlistButton>
            <h5>Liked Videos</h5>
            </Link>
          

          
          <Link className="videoLikeContainer" to="/watchLater">
            <WishlistButton
              className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage flex-row-center"
              onClick=""
              value="Home"
            >
                <MdOutlineWatchLater size="25" />
            </WishlistButton>
            <h5>Watch Later</h5>
            </Link>
          

          
          <Link className="videoLikeContainer" to="/history_page">
            <WishlistButton
              className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage flex-row-center"
              onClick=""
              value="Home"
            >
                <MdHistory size="25" />
            </WishlistButton>
            <h5>History</h5>
            </Link>
          
        </form>
      </nav>
    </>
  );
}
