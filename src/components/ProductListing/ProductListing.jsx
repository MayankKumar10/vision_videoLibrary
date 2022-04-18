import React, {useState, useEffect} from "react";
import {UseFilter} from "../../context/FilterProvider";
import "../../styles/root.css";
import {
  Rating,
  Sort,
  Price,
  Category,
} from "../../utils/filter";
import {NormalCard} from "../Cards/NormalCard";
import {AllVideos} from "../../context/ContextProducts";
import {Loader} from "../Loader/Loader";
import {NavLink} from "react-router-dom";
import {UseHistory} from "../../context/HistoryProvider";

export function ProductListing() {
  const {productState} = AllVideos();
  const {data: videos, loading} = productState;

  const {
    id,
    title,
    url,
    thumbnail,
    channel,
    profile,
    description,
    subscribers,
    views,
    uploadTime,
    playbackTime,
    likes,
  } = videos;

  const {state, dispatch} = UseFilter();
  const {category} = state;
  const {All, Laptop, Gaming_Laptops, CPU, Phones} =
    category;

  const categoryFilter = Category(
    videos,
    All,
    Laptop,
    Gaming_Laptops,
    CPU,
    Phones
  );

  return (
    <>
      <div class="product-list-container user-main-container container-bg">
        <section className="category-container">
          <button
            className="videoCategory button-normal ButtonDomContainer buttonHoverShadow"
            onClick={(e) =>
              dispatch({
                type: "ALL",
              })
            }
          >
            All
          </button>
          <button
            className="videoCategory button-normal ButtonDomContainer buttonHoverShadow"
            onClick={(e) =>
              dispatch({
                type: "LAPTOP",
              })
            }
          >
            Laptop
          </button>
          <button
            className="videoCategory button-normal ButtonDomContainer buttonHoverShadow"
            onClick={(e) =>
              dispatch({
                type: "GAMING_LAPTOPS",
              })
            }
          >
            Gaming Laptop
          </button>
          <button
            className="videoCategory button-normal ButtonDomContainer buttonHoverShadow"
            onClick={(e) =>
              dispatch({
                type: "CPU",
              })
            }
          >
            CPU
          </button>

          <button
            className="videoCategory button-normal ButtonDomContainer buttonHoverShadow"
            onClick={(e) =>
              dispatch({
                type: "PHONES",
              })
            }
          >
            Phones
          </button>
        </section>
        <main class="product-container mid-container container-bg ">
          {loading ? (
            <Loader type="spinningBubbles" color="#fff" />
          ) : (
            categoryFilter.length > 0 &&
            categoryFilter.map((product) => (
              <div key={product.id} product={product}>
                <NormalCard
                  key={product.id}
                  product={product}
                  {...product}
                />
              </div>
            ))
          )}
        </main>
      </div>
    </>
  );
}

export default ProductListing;
