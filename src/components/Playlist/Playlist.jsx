import React, {useEffect} from "react";
import {PlaylistProducts} from "../../context/PlaylistProvider";
import {NormalCard, ViewListCard} from "..";
import {empty_playlist} from "../../assets/images";

export function Cart() {
  const {PlaylistVideos, removeFromPlaylist} =
    PlaylistProducts();
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
                //<NormalCard key={product.id} {...product} />
                <ViewListCard
                  key={product.id}
                  props={value}
                />
              );
            })
          )}
        </main>
      </div>
    </>
  );
}

export default Cart;
