import React from "react";
import "../../styles/root.css";
import {
  MdCategory,
  MdFavorite,
  MdShoppingCart,
  MdPerson,
} from "react-icons/md";
import {Link} from "react-router-dom";
import reactDom from "react-dom";

export function Header() {
  return (
    <>
      <div className="ComponentMainBoxOne img-responsive ">
        <header className="headerContainerMain header-center Header-TextSize box-shadow ">
          <div className="headerContainerOne flex-evenly padding-small-left1">
            <img
              className="logoImage"
              src="./Images/Phoenix UI.jpg"
              alt=""
            />
            <h4>
              <Link to="/">Vision Video Library</Link>
            </h4>
          </div>

          <div className="headerContainerTwo flex padding-top-normal1">
            <form
              className="search-container-main"
              action="#"
            >
              <input
                className="boxShadow search-container"
                type="search"
                name=""
                placeholder="search"
                id=""
              />
              <button className="material-icons button-transparent primary-btn">
                search
              </button>
            </form>

            <div className="iconsContainer flex-evenly">
              <Link
                className="headerAnchorTag flex-column-center icons-btn-hover buttonHoverShadow"
                to="/"
              >
                <MdCategory size="25" />
                <span className="icon-inner-txt">Home</span>
              </Link>

              <div className="iconNotification ">
                <Link
                  className="headerAnchorTag flex-column-center icons-btn-hover buttonHoverShadow"
                  to="/Likedlist"
                >
                  <div className="outer">11</div>
                  <MdFavorite size="25" />

                  <span className="icon-inner-txt">
                    Like
                  </span>
                </Link>
              </div>

              <Link
                className="headerAnchorTag flex-column-center icons-btn-hover buttonHoverShadow"
                to="/Cart"
              >
                <MdShoppingCart size="25" />
                <span className="icon-inner-txt">Cart</span>
              </Link>

              <Link
                className="headerAnchorTag flex-column-center icons-btn-hover buttonHoverShadow"
                to="/user-page"
              >
                <MdPerson size="25" />
                <span className="icon-inner-txt">
                  Account
                </span>
              </Link>
            </div>

            <button
              id="myBtn"
              className="header-btn transparent-bg button-normal ButtonDomContainer icons-btn-hover buttonHoverShadow"
            >
              <Link
                className="headerAnchorTag flex-column-center"
                to="./login"
                target="iframe-main-container"
              >
                <span className="button-inner-txt">
                  Login
                </span>
              </Link>
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
