import React, {useState, useEffect} from "react";
import {MdOutlineMoreVert} from "react-icons/md";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
import {UseHistory} from "../../context/HistoryProvider";
import "../../styles/root.css";

function NormalCard({
  id,
  title,
  url,
  thumbnail,
  channel,
  profile,
  description,
  category,
  views,
  uploadTime,
  playbackTime,
  likes,
  noDetails,
}) {
  const [isInLikedHistory, setIsInLikedHistory] =
    useState();

  const {HistoryVideos, addToHistory, removeFromHistory} =
    UseHistory();

  useEffect(() => {
    const VideoIsInHistory = HistoryVideos.find(
      (product) => product.title === title
    );

    if (VideoIsInHistory) {
      setIsInLikedHistory(true);
    } else {
      setIsInLikedHistory(false);
    }
  }, [HistoryVideos, title]);

  const handleHistory = () => {
    const product = {
      id,
      title,
      url,
      thumbnail,
      channel,
      profile,
      category,
      views,
      uploadTime,
      playbackTime,
      likes,
    };

    if (isInLikedHistory) {
      removeFromHistory(product);
      console.log("Remove From History", product);
    } else {
      addToHistory(product);
      console.log("Added To History", product);
    }
  };

  const handleMouseOver = (e) => {
    return (
      e.target.play(),
      console.log("Mouse Over", e.currentTarget.play())
    );
  };

  const handleMouseHover = () => {
    return console.log("on mouse Hover");
  };

  return (
    <>
      <Link to={`/videos/${id}`} onClick={handleHistory}>
        <div
          className="card-container buttonHoverShadow"
          key={id}
        >
          <section className="">
            <ReactPlayer
              controls
              url={`www.youtube.com/watch?v=${url}`}
              width="380px"
              height="164px"
              light={thumbnail}
            />
          </section>
          <span className="card-text-container card-brand-text">
            <span className="card-container-price-icons card-footer">
              <span className="card-price">
                <img
                  className="AvatarImage box-shadow-round"
                  src={profile}
                  alt="profile"
                />
              </span>
              <h5>{title.substring(0, 40)}</h5>
              <span className="dropdown">
                <MdOutlineMoreVert className="dropBtn">
                  <Link to="/watchLater">
                    Save To Watch Later
                  </Link>
                  <Link to="/playlist">
                    Save To Playlist
                  </Link>
                </MdOutlineMoreVert>
              </span>
            </span>
          </span>
        </div>
      </Link>
    </>
  );
}

export {NormalCard};
