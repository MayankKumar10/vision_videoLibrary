import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { removePlaylistAPI } from "../../APIs";
import { actionTypes } from "../../constant";
import { CustomPlaylist } from "../../hooks";
import {AddVideos} from '../../assets/images'

//import {UseWishlist} from "../../context/WishlistProvider";
import "../../styles/root.css";
import {UserNav} from "../index";
// import {
//   MdFavorite,
//   MdAddShoppingCart,
// } from "react-icons/md";
// import {WishlistButton} from "./WishlistButton.styled";
// import {emptyWishlist} from "../../assets/images";

export function ViewListCard({playlist}) {
const navigate = useNavigate();
const {SET_PLAYLISTS} = actionTypes;
const [removePlaylistsCall] = CustomPlaylist(
  removePlaylistAPI,
  playlist,
  SET_PLAYLISTS,
  `Deleted ${playlist.title}`
)
  
const{
  _id,
  title,
  category,
  } = playlist

  
  return (
    <>   
    <div className="wishlist-card-container" key={playlist.id}>
            <div className="card-container-horizontal flex-column-start">
              <section className="view-card flex-column-center">
                <section className="flex-row-start"  onClick={async()=>{
                      navigate(`/playlist/${_id}`);
                    }}>
                  <img
                    className="playlist-img"
                    src={
                      playlist.videos.length === 0 ?
                      `${AddVideos}`
                      : playlist.videos[0].thumbnail
                    }
                    alt='playlist-img'
                  />
                 
                </section>
              </section>
              
            </div>

            <span className="card-text-container cart-brand-text">
              <span className="card-txt-length">

              <h4>Length:  {playlist.videos.length}</h4>

                <b><i><h3>{title}</h3></i></b>
                

                <span className="rating-container">
                
                </span>
               
              </span>
            </span>

            <span></span>
            <button
              className="delete-icon 
            buttonHoverShadow card-wishlist-icons"
              onClick={() => removePlaylistsCall()}
            >
              <i className="material-icons cart-material-icons">
                delete
              </i>
            </button>
          </div>
       
    </>
  );
}
