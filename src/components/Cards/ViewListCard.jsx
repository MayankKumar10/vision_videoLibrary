import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player";
//import {UseWishlist} from "../../context/WishlistProvider";
import "../../styles/root.css";
import {UserNav} from "../index";
// import {
//   MdFavorite,
//   MdAddShoppingCart,
// } from "react-icons/md";
// import {WishlistButton} from "./WishlistButton.styled";
// import {emptyWishlist} from "../../assets/images";

export function ViewListCard({props}) {
  const {products, removeFromCard} = props;

  const handleRemove = (product) => removeFromCard(product);

  return (
    <>
      {products.map((product) => {
        return (
          <div
            className="wishlist-card-container"
            key={product.id}
          >
            <div className="card-container-horizontal flex-column-start">
              <section className="view-card flex-column-center">
                <section className="flex-row-start">
                  <ReactPlayer
                    controls
                    url={`www.youtube.com/watch?v=${product.url}`}
                    width="380px"
                    height="100px"
                  />
                </section>
              </section>
            </div>

            <span className="card-text-container cart-brand-text">
              <span className="card-description">
                <h5>{product.title}</h5>

                <span className="rating-container"></span>
                <h6>{product.category}</h6>
              </span>
            </span>

            <span></span>
            <button
              className="delete-icon 
    buttonHoverShadow card-wishlist-icons"
              onClick={(e) => handleRemove(product)}
            >
              <i className="material-icons cart-material-icons">
                delete
              </i>
            </button>
          </div>
        );
      })}
    </>
  );
}
