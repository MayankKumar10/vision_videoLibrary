import React, { useEffect, useState } from "react";
import "../../styles/root.css";
import {Link} from "react-router-dom";
import { useUserData } from "../../context/UserDataProvider";
import { useAuth } from "../../context/AuthProvider";
import { actionTypes } from "../../constant/actionTypes";
import { useDebounce } from "../../filterFunctions";
import {useNavigate} from 'react-router-dom';
import { useVideoData } from "../../context";

export function Header() {

  const {videoDispatch} = useVideoData();
  const {SEARCH,RESET} = actionTypes;
  const navigate = useNavigate();
  const [searchInputState, setSearchInputState] = useState();
  const debounceSearchInput = useDebounce(searchInputState, 500);
  const {userDataDispatch} = useUserData();
  const {
		auth,
		setAuth
	} = useAuth();
  
  // useEffect(()=>{
  //   userDataDispatch({
  //     type: SEARCH,
  //     payload: {searchInput: searchInputState}
  //   })
  // }, [debounceSearchInput]);

  const logoutHandler = () =>{
		localStorage.clear();
		setAuth({
			token:'',
			isAuth: false,
			firstName: '',
			lastName: '',
			userEmail: '',
		});
		userDataDispatch({type: RESET})
		navigate('/');
	}

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
                placeholder="search"
                value={searchInputState}
                onChange={(e)=>{
                  setSearchInputState(e.target.value)
                }}
              />
              <button className="material-icons button-transparent primary-btn"
              onClick={(e)=>{
                e.preventDefault();
                setSearchInputState('');
                videoDispatch({
                  type: SEARCH,
                  payload: {searchInput:''}
                })
              }}
              >
                search
              </button>
            </form>

            { auth.isAuth ? 
                (
                <button
                  id="myBtn"
                  className="header-btn transparent-bg button-normal ButtonDomContainer icons-btn-hover buttonHoverShadow"
                >
                <span className="button-inner-txt" 
                onClick={logoutHandler} >
                  Logout
                </span>
                </button>
                )
                :
              (
                <button
                id="myBtn"
                className="header-btn transparent-bg button-normal ButtonDomContainer icons-btn-hover buttonHoverShadow"
              >
              <a
                className="headerAnchorTag flex-column-center"
                href="./Login"
              >
                <span className="button-inner-txt">
                  Login
                </span>
              </a>
              </button>
              )
              }
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
