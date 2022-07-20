import React from "react";
import "../../styles/root.css";
import {NormalCard} from "../Cards/NormalCard";
import {Loader} from "../Loader/Loader";
import {useNavigate} from "react-router-dom";
import { useVideoData } from "../../context";
import { actionTypes, constants } from "../../constant";
import {getSearchedVideos} from '../../filterFunctions'
import { sortByDate } from "../../filterFunctions";

export function ProductListing() {
  
  const{videoDataState:{
    data,
    categories,
    selectedCategory,
    sortBy,
    searchText,
  }, 
  videoDispatch,
  videoLoader,
  videoError,
} = useVideoData(); 

const {FILTER, SORT_VIDEOS} = actionTypes;
const {NEWEST, OLDEST} = constants;
const navigate = useNavigate();
videoError && navigate('/error');

  let videoList = [...data];

  if(searchText) {
    videoList = getSearchedVideos(videoList, searchText);
  }

  const filteredVideos = selectedCategory ? 
  videoList.filter((item)=> item.category === selectedCategory)
  : videoList;

  const videoFinalList = sortByDate(filteredVideos, sortBy)

  const videoDispatchHandler = (val) =>{
    videoDispatch({
      type: FILTER,
      payload: { category: val }
    })
  }

  
  return (
    <>
      <div class="product-list-container user-main-container container-bg">
        <section className="category-container">
          <button
             className={`videoCategory btn-chip  ButtonDomContainer buttonHoverShadow ${selectedCategory ? '' : 'btn-chip-active'}`}
            onClick={(e) =>
             videoDispatchHandler('')
            }
          >
            All
          </button>

          {categories.map((category)=>(
            <button
            className={`videoCategory btn-chip  ButtonDomContainer buttonHoverShadow ${selectedCategory === category.categoryName ? 'btn-chip-active': ''}`}
            onClick={(e) =>
              videoDispatchHandler(category.categoryName)}
              key={category.id}
          >
            {category.categoryName}
          </button>
          ))}

          
        </section>
        <main class="product-container mid-container container-bg ">
          {videoLoader ? (
            <Loader type="spinningBubbles" color="#fff" />
          ) : (
            videoFinalList.length > 0 &&
            videoFinalList?.map((video) => (
              <div key={video.id} video={video}>
                <NormalCard
                  key={video.id}
                  video={video}
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
