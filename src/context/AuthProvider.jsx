import axios from "axios";
import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext,
} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {
  initialState,
  AuthReducer,
} from "../reducer/AuthReducer";
import RingLoader from "react-spinners/RingLoader";
import styled from "styled-components";

const AuthContext = createContext();

export const StyledLoader = styled.div`
  display: block;
  margin: 0 auto;
  color: var(--primary-color);
  border-color: red;
`;

const AuthProvider = ({children}) => {
  const {AuthState, AuthDispatch} = useReducer(
    AuthReducer,
    initialState
  );

  const navigate = useNavigate();
  const location = useLocation();
  const [load, setLoad] = useState(false);

  const signInHandler = (
    email,
    password,
    redirect,
    setState
  ) => {
    axios
      .post("/api/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const user = response.data.foundUser;
        console.log(user);

        setTimeout(() => {
          localStorage.setItem(
            "vision-token",
            response.data.encodedToken
          );
          setUserDetails(user, response.data.encodedToken);
          navigate(redirect, {replace: true});
        }, 500);
      })
      .catch((err) => {
        console.log("Login Error", err);
        setState(false);
      });
  };

  const signUpHandler = (
    fullName,
    email,
    password,
    setState
  ) => {
    axios
      .post("/api/auth/signup", {
        fullName: fullName,
        email: email,
        password: password,
      })
      .then((response) => {
        const user = response.data.createdUser;

        setTimeout(() => {
          localStorage.setItem(
            "vision-token",
            response.data.encodedToken
          );
          setUserDetails(user, response.data.encodedToken);
          navigate("/");
        }, 500);
      })
      .catch((err) => {
        console.log("Signup Error", err);
        setState(false);
      });
  };

  const LogoutHandler = () => {
    AuthDispatch({
      type: "REMOVE_USER",
    });
    navigate("/");
  };

  const setUserDetails = (user, token) => {
    AuthDispatch({
      type: "SET_USER",
      payload: {
        _id: user.id,
        name: user.fullName,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        encodedToken: token,
      },
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("vision-token");
    if (token) {
      axios
        .post("/api/auth/verify", {
          encodedToken: token,
        })
        .then((response) => {
          setUserDetails(response.data, token);
          setLoad(true);
        })
        .catch((err) => {
          AuthDispatch({
            type: "REMOVE_USER",
          });
          navigate("/");
          setLoad(true);
        });
    } else {
      setLoad(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        AuthState,
        signInHandler,
        signUpHandler,
        LogoutHandler,
      }}
    >
      {load ? (
        children
      ) : (
        <StyledLoader>
          <RingLoader loading={load} size={80} />
        </StyledLoader>
      )}
    </AuthContext.Provider>
  );
};

const UseAuth = () => useContext(AuthContext);

export {UseAuth, AuthProvider};
