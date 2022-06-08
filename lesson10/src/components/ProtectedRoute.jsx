import React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../redux/reducers/authReducer/selector";
import LoadingToRedirect from "./LoadingToRedirect";

const ProtectedRoute = ({children}) => {
  const user = useSelector(authSelector);
    if (!user.currentUser) {
      return <LoadingToRedirect />
    }

  return children
}

export default ProtectedRoute;