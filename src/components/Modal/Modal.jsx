import React, { useEffect, useState } from 'react'
import { addPlaylistAPI } from '../../APIs';
import { actionTypes } from '../../constant';
import { useUserData } from '../../context';
import { checkInPlaylist } from '../../filterFunctions';
import { CustomPlaylist } from '../../hooks';
import {BsXCircleFill} from "react-icons/bs";
import { CheckBox } from './CheckBox';
import '../../styles/root.css'

export const Modal = ({val, setOpened, video}) => {
  const[modalOpen, setModalOpen] = useState(false);
  const[playlistAdding, setPlaylistAdding] = useState(false);
  const{userData:{playlists},} = useUserData();
  const{SET_PLAYLISTS} = actionTypes;
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [addPlaylistCall] = CustomPlaylist(
    addPlaylistAPI,
    {
      playlist:{
        title: playlistTitle,
        videos: [{...video}],
      }
    },
    SET_PLAYLISTS,
    `${playlistTitle} created playlist and video added`
  );

  useEffect(() => setModalOpen(val),[val]);

  return (
    <>
    {modalOpen && (
      <>
      <div className="overlay"></div>
          <div className="modal-centered playlist-modal holo-bg">
            <div className="padding-xxs flex-space-between">
              <span>Save to...</span>
              <BsXCircleFill
                onClick={() => {
                  setModalOpen(false);
                  setOpened(false);
                  console.log('closing')
                }}
              />
            </div>
            <ul className="playlist-modal-body">
              {playlists.map((playlist) => {
                const exists = checkInPlaylist(
                  video,
                  playlist.videos
                );
                return (
                  <li className="text-center playlist-modal-item gap-s">
                    <CheckBox
                      key={playlist._id}
                      exists={exists}
                      playlist={playlist}
                      video={video}
                    />

                    {playlist.title}
                  </li>
                );
              })}
            </ul>
            {playlistAdding ? (
              <div className="flex-column gap-xs">
                <input
                  className="input"
                  placeholder="Enter Name"
                  value={playlistTitle}
                  onChange={(e) =>
                    setPlaylistTitle(e.target.value)
                  }
                />
                <span
                  className="txt-high-light pointer"
                  role="button"
                >
                  <b
                    onClick={() => {
                      addPlaylistCall();
                      setPlaylistAdding(false);
                    }}
                  >
                    CREATE
                  </b>
                </span>
              </div>
            ) : (
              <div
                className="playlist-modal-item gap-xs"
                onClick={() => setPlaylistAdding(true)}
              >
                <i class="fas fa-folder-plus"></i>
                <span className=" padding-xxs ">
                  Create new playlist
                </span>
              </div>
            )}
          </div>
      </>
    )}      
    </>
  )
}
