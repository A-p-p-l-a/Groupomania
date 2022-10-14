import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Logout from "./Log/Logout";

const Navbar = () => {

    const user = useSelector((state) => state.user);
    


    return (
        <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/icon-left-font-monochrome-black.png" height="100" alt="icon" />
            </div>
          </NavLink>
        </div>
        {user ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5>{user.pseudo}</h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <img src="" alt="login"/>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
    );
};

export default Navbar;