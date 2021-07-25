import React from "react";
import { Navigate, Route, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext";
import { privateRouteType } from "../../types/types"




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
