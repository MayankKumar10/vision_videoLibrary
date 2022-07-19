import React from "react";
import {
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import {RingLoader} from "react-spinners";
import {
  StyledLoader,
  useAuth,
} from "../../../context/AuthProvider";

export const RequireAuth = () => {
  const {auth} = useAuth();
  const location = useLocation();

  return auth.isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="login" state={{from: location}} replace />
  );
};
