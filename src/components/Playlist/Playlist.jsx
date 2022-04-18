import React, {useEffect} from "react";
import {PlaylistProducts} from "../../context/CartProvider";
import {NormalCard} from "..";

export function Cart() {
  const {PlaylistVideos, removeFromCart} =
    PlaylistProducts();

  useEffect(() => {});

  return (
    <>
      <div className="user-main-container flex-space-evenly-start">
        <main className="product-container border-radius-normal box-shadow col-7">
          <p className="wishlist-text padding-normal">
            My Playlist({PlaylistVideos.length})
          </p>
          {PlaylistVideos.map((product) => {
            return (
              <NormalCard key={product.id} {...product} />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default Cart;
