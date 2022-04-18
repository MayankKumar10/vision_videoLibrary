import React from "react";
import {UsePlaylist} from "../../context/PlaylistProvider";
import {NormalCard, ViewListCard} from "..";
import {empty_playlist} from "../../assets/images";

export function Cart() {
  const {PlaylistVideos, removeFromPlaylist} =
    UsePlaylist();
  const value = {
    products: PlaylistVideos,
    removeFromCard: removeFromPlaylist,
  };

  return (
    <>
      <div className="user-main-container flex-space-evenly-start">
        <main className="product-container border-radius-normal box-shadow col-7">
          <p className="wishlist-text padding-normal">
            My Playlist({PlaylistVideos.length})
          </p>
          {PlaylistVideos.length < 1 ? (
            <>
              <img
                src={empty_playlist}
                alt="empty_playlist"
              />
            </>
          ) : (
            PlaylistVideos.map((product) => {
              return (
                <NormalCard key={product.id} {...product} />
              );
            })
          )}
        </main>
      </div>
    </>
  );
}

export default Cart;
