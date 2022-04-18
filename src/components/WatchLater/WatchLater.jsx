import React from "react";
import {UseWatch} from "../../context/WatchProvider";
import "../../styles/root.css";
import {NormalCard} from "../Cards/NormalCard";

export function WatchLater() {
  const {WatchProducts, removeFromWatch} = UseWatch();

  return (
    <>
      <div className="user-main-container flex-space-evenly-start">
        <main className="product-container margin-normal-left border-radius-normal box-shadow col-8">
          <p className="wishlist-text padding-normal">
            Watch Videos ({WatchProducts.length})
          </p>

          {WatchProducts.map((product) => {
            return (
              <NormalCard key={product.id} {...product} />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default WatchLater;
