import React from 'react';
import "./navbar.css";
import menu from "../../utils/images/icons/menu.svg"
import logo from "../../utils/images/logo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} className="navbar-logo" />
            <div className="navbar-right">
                <p>LeaderBoard</p>
                <p>Login</p>
            </div>
            <img className="navbar-menu" src={menu} />
        </div>
    );
};

export default Navbar;