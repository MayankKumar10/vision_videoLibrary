import React from "react";
import {emptyWishlist} from "../../assets/images";
import { useUserData } from "../../context";
import "../../styles/root.css";
import {NormalCard} from "../Cards/NormalCard";
import { PlaylistCard } from "../Cards/PlaylistCard";
import { Loader } from "../Loader/Loader";

export function LikedList() {

  const{userData:{likesPlaylist},isLoadingLikes} = useUserData();
  
  return !isLoadingLikes ? (
    <>
      <div className="user-main-container flex-space-evenly-start">
        <main className="product-container margin-normal-left border-radius-normal box-shadow col-8">
          <p className="wishlist-text padding-normal">
            Liked Videos ({likesPlaylist.length})
          </p>

          {likesPlaylist.length < 1 ? (
            <>
              <img
                src={emptyWishlist}
                alt="emptyWishlist"
              />
            </>
          ) : (
            likesPlaylist.map((video) => {
              return (
                <PlaylistCard key={video.id} video={video} playlistTitle='Likes'/>
              );
            })
          )}
        </main>
      </div>
    </>
  ): (
    <Loader />
  )
}

export default LikedList;
