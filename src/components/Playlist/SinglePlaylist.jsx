import React from 'react'
import { useParams } from 'react-router-dom'
import { useUserData } from '../../context';
import { NormalCard } from '../Cards/NormalCard';
import {empty_playlist} from "../../assets/images";
export const SinglePlaylist = () => {
  
  const {playlistId} = useParams();
  const{userData:{playlists},} = useUserData()
  
  const playlist = playlists.find(
    (currPlaylist)=> currPlaylist._id === playlistId
  )
  return (
    <>
      <div className="user-main-container flex-space-evenly-start">
        <main className="product-container margin-normal-left border-radius-normal box-shadow col-8">
          <p className="wishlist-text padding-normal">
            Watch Videos ({playlist.length})
          </p>

          {playlist.length < 1 ? (
            <>
              <img
                src={empty_playlist}
                alt="empty_playlist"
              />
            </>
          ) : (
            playlist?.videos.map((video) => {
              return (
                <NormalCard key={video.id} video={video} />
              );
            })
          )}
        </main>
      </div>
    </>
  )
}
