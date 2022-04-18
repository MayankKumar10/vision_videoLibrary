import React from "react";
import {useLocation, Navigate} from "react-router-dom";
import {RingLoader} from "react-spinners";
import {
  StyledLoader,
  UseAuth,
} from "../../../context/AuthProvider";

export const RequireAuth = ({children}) => {
  const {AuthState} = UseAuth();
  const location = useLocation();

  return (
    <>
      {AuthState._id ? (
        (children, console.log(AuthState.email))
      ) : (
        <Navigate
          to="/login"
          state={{path: location.pathname}}
        />
      )}
    </>
  );
};
