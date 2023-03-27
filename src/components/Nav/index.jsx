import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { RiRadio2Fill } from "react-icons/ri";
import { BiFilm } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";

import logo from "../../assets/logo.svg";

const Nav = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [click, setClick] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleLinkClick = () => {
    updateMenu();
  };

  return (
    <div className="opacity-100 mmd:opacity-0">
      <nav className=" blur-effect-theme">
        <div className="burger-menu flex" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <div>
          <img src={logo} alt="logo/musica" />
        </div>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="w-10 h-10 text-white opacity-50 cursor-pointer fixed right-4 top-4"
        />
      </nav>

      <div className={`${menu_class} flex flex-col gap-y-10`}>
        <ul
          className="pl-10 gap-y-10"
          onClick={() => setClick((prevState) => !prevState)}
        >
          <li className="mb-12">
            <NavLink
              activeclassname="active"
              to="/"
              className="flex items-center gap-3 text-lg text-slate-50"
              onClick={handleLinkClick}
            >
              <BiHomeAlt className="w-7 h-7" />
              Home
            </NavLink>
          </li>

          <li className="mb-12">
            <NavLink
              activeclassname="active"
              to="/album"
              className="flex items-center gap-3 icon-style text-lg text-slate-50"
              onClick={handleLinkClick}
            >
              <BsFillCollectionPlayFill className="w-7 h-7" />
              My collections
            </NavLink>
          </li>

          <li className="mb-12">
            <NavLink
              activeclassname="active"
              to="/topchart"
              className="flex items-center gap-3 icon-style text-lg text-slate-50"
              onClick={handleLinkClick}
            >
              <RiRadio2Fill className="w-7 h-7" />
              Radio
            </NavLink>
          </li>

          <li className="mb-12">
            <NavLink
              activeclassname="active"
              to="/user"
              className="flex items-center gap-3 icon-style text-lg text-slate-50"
              onClick={handleLinkClick}
            >
              <BiFilm className="w-7 h-7" />
              Video
            </NavLink>
          </li>

          <li className="mb-12">
            <NavLink
              activeclassname="active"
              to="/logout"
              className="flex items-center gap-3 icon-style text-lg text-slate-50"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faUser} className="w-7 h-7" />
              User
            </NavLink>
          </li>

          <li className="mb-12">
            <NavLink
              activeclassname="active"
              to="/logout"
              className="flex items-center gap-3 icon-style text-lg text-slate-50"
              onClick={handleLinkClick}
            >
              <IoLogOut className="w-7 h-7" />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
