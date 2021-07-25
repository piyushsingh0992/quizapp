import React from 'react';
import "./style.css";
import menu from "../../utils/images/icons/menu.svg"
import logo from "../../utils/images/logo.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext";
const Navbar = () => {

    let { auth: { loginStatus }, authDispatch } = useAuth();
    return (
        <div className="navbar">
            <NavLink end to="/" activeClassName="active-route">
                <img src={logo} className="navbar-logo" />
            </NavLink>
            <div className="navbar-right">
                <NavLink end to="/leaderBoard" activeClassName="active-route">
                    LeaderBoard
                </NavLink>
                {loginStatus ? <p onClick={() => { authDispatch({ type: "LOGOUT" }) }}>Logout</p> : <NavLink end to="/login" activeClassName="active-route">
                    Login
                </NavLink>}
            </div>
            <img className="navbar-menu" src={menu} />
        </div>
    );
};

export default Navbar;