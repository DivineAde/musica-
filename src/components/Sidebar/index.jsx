import React from "react";
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillCollectionPlayFill } from "react-icons/bs"
import { RiRadio2Fill } from "react-icons/ri"
import { BiFilm } from "react-icons/bi"
import { IoLogOut } from "react-icons/io5"

const Sidebar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-[10%] h-full flex flex-col items-center gap-10 side-bg pt-6 opacity-100 md:opacity-0">
        <div>
          <img src={logo} />
        </div>

        <div className="flex flex-col gap-6 justify-center items-center bg-slate-900 w-fit px-5 rounded-3xl py-4">
          <NavLink to="/" activeClassName="active" className="icon-style">
            <BiHomeAlt
              className="w-7 h-7 cursor-pointer"
            />
          </NavLink>
          <NavLink to="/album" activeClassName="active" className="icon-style">
            <RiRadio2Fill
              className="w-7 h-7 cursor-pointer"
            />
          </NavLink>
          <NavLink to="/topchart" activeClassName="active" className="icon-style">
            <BsFillCollectionPlayFill
              className=" w-7 h-7 cursor-pointer"
            /> 
          </NavLink>
          <Link to="" className="icon-style">
            <BiFilm
              className=" w-7 h-7 cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-6 justify-center items-center bg-slate-900 w-fit px-5 rounded-3xl py-4">
          <Link to="" className="icon-style">
            <FontAwesomeIcon icon={faUser}
              className=" w-7 h-7 cursor-pointer"
            />
          </Link>
          <Link to="" className="icon-style">
            <IoLogOut
              className=" w-7 h-7 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
