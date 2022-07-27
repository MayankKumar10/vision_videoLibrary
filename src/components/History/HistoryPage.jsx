import React from "react";
import { removeFromHistoryAPI } from "../../APIs";
import {emptyHistory} from "../../assets/images";
import { actionTypes } from "../../constant";
import { useUserData } from "../../context";
import { CustomPlaylist } from "../../hooks";
import "../../styles/root.css";
import {NormalCard} from "../Cards/NormalCard";
import { PlaylistCard } from "../Cards/PlaylistCard";

export function HistoryPage() {
  const{userData:{history},isLoadingHistory} = useUserData();
  const{SET_HISTORY} = actionTypes;

  const[clearHistoryCall] = CustomPlaylist(
    removeFromHistoryAPI,
    history,
    SET_HISTORY,
    "Cleared History"
  )

  return (
    <>
      <div className="user-main-container flex-space-evenly-start">
        <main className="product-container margin-normal-left border-radius-normal box-shadow col-8">
          <p className="wishlist-text padding-normal">
            History Videos ({history.length})
          </p>

          {history.length < 1 ? (
            <>
              <img className="container-img" src={emptyHistory} alt="emptyHistory" />
            </>
          ) : (
            history.map((video) => {
              return (
                <PlaylistCard key={video.id} video={video}  playlistTitle='History'/>
              );
            })
          )}
        </main>
      </div>
    </>
  );
}

export default HistoryPage;
