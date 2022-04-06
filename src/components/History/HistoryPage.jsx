import React from "react";
import {UseHistory} from "../../context/HistoryProvider";
import {UseLiked} from "../../context/LikedProvider";
import "../../styles/root.css";
import {NormalCard} from "../Cards/NormalCard";

export function HistoryPage() {
  const {HistoryVideos, removeFromHistory} = UseHistory();

  return (
    <>
      <div className="user-main-container flex-space-evenly-start">
        <main className="product-container margin-normal-left border-radius-normal box-shadow col-8">
          <p className="wishlist-text padding-normal">
            History Videos ({HistoryVideos.length})
          </p>

          {HistoryVideos.map((product) => {
            return (
              <NormalCard key={product.id} {...product} />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default HistoryPage;
