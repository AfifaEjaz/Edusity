import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full flex justify-center items-center">
        <div className="w-3/4 flex flex-col md:flex-row justify-between items-center border-t border-gray-400  py-5">
          <p>© 2024 Edusity. All rights reserved.</p>
          <ul className="flex gap-5">
            <li>
              <NavLink>Terms of Services</NavLink>
            </li>
            <li>
              <NavLink>Privacy Policy</NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
