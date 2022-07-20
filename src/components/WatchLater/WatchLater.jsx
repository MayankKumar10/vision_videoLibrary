import React from "react";
import {emptyWatch_later} from "../../assets/images";
import { useUserData } from "../../context";
import "../../styles/root.css";
import { PlaylistCard } from "../Cards/PlaylistCard";
import { Loader } from "../Loader/Loader";

export function WatchLater() {
  
  const{userData:{watchLaterPlaylist}, isLoadingWatchLater} = useUserData();

  return !isLoadingWatchLater ? (
    <>
      <div className="user-main-container flex-space-evenly-start">
        <main className="product-container margin-normal-left border-radius-normal box-shadow col-8">
          <p className="wishlist-text padding-normal">
            Watch Videos ({watchLaterPlaylist.length})
          </p>

          {watchLaterPlaylist.length < 1 ? (
            <>
              <img
                src={emptyWatch_later}
                alt="emptyWatch_later"
              />
            </>
          ) : (
            watchLaterPlaylist.map((video) => {
              return (
                <PlaylistCard key={video.id} video={video} playlistTitle='Watch Later' />
              );
            })
          )}
        </main>
      </div>
    </>
  ):
  (
    <Loader />
  )
}

export default WatchLater;
