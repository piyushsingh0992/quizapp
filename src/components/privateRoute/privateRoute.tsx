import React, { useState } from "react";
import { Navigate, Route,useParams } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext";
import { Location } from 'history';
import {  useLocation } from 'react-router-dom';

type privateRouteType = {
    path: string;
    element: React.ReactElement;

}
type LocationState = {
    from: Location;
};

interface stateType {
    from: { pathname: string }
 }

const PrivateRoute = ({ path, ...props }: privateRouteType) => {
  
    let { auth: { loginStatus } } = useAuth();
    let paramsArray = useParams();
    let pathArray = path.split(":");
    let newArray = pathArray.map((item) => {
      if (paramsArray[item]) {
        return paramsArray[item];
      }
      return item;
    });
    let newPath = newArray.join("");


    return loginStatus ? (
        <Route path={path} {...props} />
    ) : (
        <Navigate state={{ from: newPath }} replace to="/login" />
    );
};

export default PrivateRoute;
