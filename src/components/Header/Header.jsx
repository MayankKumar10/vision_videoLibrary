import React from "react";
import "../../styles/root.css";
import {Link} from "react-router-dom";

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

            <Link
              className="headerAnchorTag flex-column-center"
              to="login"
            >
              <button
                id="myBtn"
                className="header-btn transparent-bg button-normal ButtonDomContainer icons-btn-hover buttonHoverShadow"
              >
                <span className="button-inner-txt">
                  Login
                </span>
              </button>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
