import React from "react";
import {UseLiked} from "../../context/LikedProvider";
import "../../styles/root.css";
import {NormalCard} from "../Cards/NormalCard";

export function LikedList() {
  const {LikedProducts, removeFromLiked} = UseLiked();

  return (
    <>
      <div className="user-main-container flex-space-evenly-start">
        <main className="product-container margin-normal-left border-radius-normal box-shadow col-8">
          <p className="wishlist-text padding-normal">
            Liked Videos ({LikedProducts.length})
          </p>

          {LikedProducts.map((product) => {
            return (
              <NormalCard key={product.id} {...product} />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default LikedList;
