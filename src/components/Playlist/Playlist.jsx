import React, {useEffect} from "react";
import {ViewListCard} from "..";
import {empty_playlist} from "../../assets/images";
import { useUserData } from "../../context";
import { Loader } from "../Loader/Loader";

export function Playlist() {

  const {userData:{playlists}, isLoadingPlaylist} = useUserData();

  return !isLoadingPlaylist ?(
    <>
      <div className="user-main-container flex-space-evenly-start">
        <main className="product-container border-radius-normal box-shadow col-7">
          <p className="wishlist-text padding-normal">
            My Playlist({playlists.length})
          </p>
          {playlists.length < 1 ? (
            <>
              <img 
                src={empty_playlist}
                alt="empty_playlist"
              />
            </>
          ) : (
            playlists.map((playlist) => {
              return (
                //<NormalCard key={video.id} {...video} />
                <ViewListCard
                  key={playlist.id}
                  playlist={playlist}
                />
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

