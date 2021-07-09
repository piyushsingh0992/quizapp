import React from 'react';
import "./navbar.css";
import menu from "../../utils/images/icons/menu.svg"
import logo from "../../utils/images/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink end to="/" activeClassName="active-route">
                <img src={logo} className="navbar-logo" />
            </NavLink>
            <div className="navbar-right">
                <NavLink end to="/leaderBoard" activeClassName="active-route">
                    LeaderBoard
                </NavLink>
                <NavLink end to="/login" activeClassName="active-route">
                    Login
                </NavLink>
            </div>
            <img className="navbar-menu" src={menu} />
        </div>
    );
};

export default Navbar;