import React from "react";
//logos.
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="" />
          </a>

          {/* button. */}
          <button className="btn btn-sm ">Get in Touch</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
