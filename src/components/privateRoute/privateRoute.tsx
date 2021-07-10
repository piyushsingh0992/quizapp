import React, { useState } from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../context/authContext/authContext";
type privateRouteType = {
    path: string;
    element: React.ReactElement;

}

const PrivateRoute = ({ path, ...props }: privateRouteType) => {

    let { auth: { loginStatus } } = useAuth();

    debugger;

    return loginStatus ? (
        <Route path={path} {...props} />
    ) : (
        <Navigate state={{ from: path }} replace to="/login" />
    );
};

export default PrivateRoute;
