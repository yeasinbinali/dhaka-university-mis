import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/dhaka_university_logo.jpg";

const Header = () => {
  return (
    <div>
      <div className="w-48 mx-auto py-4">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-center items-center bg-base-200">
        <ul className="menu menu-horizontal px-1">
          <li className="text-xs md:text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xs md:text-xl">
            <details>
              <summary className="text-xs md:text-xl">Programs</summary>
              <ul className="p-2 bg-base-100">
                <li className="text-xs md:text-xl">
                  <Link to="/bba">BBA</Link>
                </li>
                <li className="text-xs md:text-xl">
                  <Link to="/mba">MBA</Link>
                </li>
                <li className="text-xs md:text-xl">
                  <Link to="/emba">EMBA</Link>
                </li>
                <li className="text-xs md:text-xl">
                  <Link to="/mphil">M.Phil</Link>
                </li>
                <li className="text-xs md:text-xl">
                  <Link to="/dphil">D.Phil</Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="text-xs md:text-xl">
            <Link to="/events">Events</Link>
          </li>
          <li className="text-xs md:text-xl">
            <Link to="/news">News</Link>
          </li>
          <li className="text-xs md:text-xl">
            <Link to="/tour">Tour</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
