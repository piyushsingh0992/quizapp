import React, { useState } from "react";
import { Navigate, Route } from "react-router-dom";

type privateRouteType = {
    path: string;
    element: React.ReactElement;

}

const PrivateRoute = ({ path, ...props }: privateRouteType) => {
    const [login, loginSetter] = useState<boolean>(true)

    return login ? (
        <Route path={path} {...props} />
    ) : (
        <Navigate state={{ from: path }} replace to="/login" />
    );
};

export default PrivateRoute;
