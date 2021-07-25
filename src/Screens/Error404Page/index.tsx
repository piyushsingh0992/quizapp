import React from 'react';
import Navbar from "../../components/navbar";
import error404 from "../../utils/images/error404.png";
import "./error404Page.css"
const Error404Page = () => {
    return (
        <div className="error404Page">
            <Navbar />
            <div className="error-container">
                <h1>404</h1>
                <p>Page not found</p>
                <img src={error404} />
            </div>

        </div>
    );
};

export default Error404Page;