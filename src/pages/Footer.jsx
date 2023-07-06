import React from "react";
import Images from "../assets/Images";
import { menuItems } from "../Data/data";

function Footer() {
  return (
    <footer className="bg-black mt-16">
      <div className="container max-w-6xl py-10 mx-auto">
        <div
          className="flex flex-col items-center mb-9 space-y-6 md:flex-row 
            md:space-y-0 md:justify-between md:items-start"
        >
          {/* Menu and Logo Container */}
          <div className="flex flex-col items-center space-y-0 md:items-start md:space-y-4">
            {/* Logo */}
            <img src={Images.Logo} alt="" className="w-44 md:ml-3" />
            <div className="flex flex-col items-center space-y-2 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* item 1 */}
              {menuItems.map((item) => (
                <div key={item.id} className="h-10 mt-10 md:mt-0 group">
                  <a href="#">{item.name}</a>
                  <div>
                    <div className="w-0 h-1 transition-all duration-300 group-hover:w-full bg-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* menu container */}

          {/* Social & Copy */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* icons container */}
            <div className="flex items-center mx-auto justify-center space-x-4  md:justify-end">
              {/* icon one */}
              <a href="#">
                <img src={Images.Facebook} alt="" />
              </a>
              <a href="#">
                <img src={Images.Twitter} alt="" />
              </a>
              <a href="#">
                <img src={Images.Instagram} alt="" />
              </a>
              <a href="#">
                <img src={Images.Pinterest} alt="" />
              </a>
            </div>

            {/* copy */}

            <div className="font-bold pt-2">
              <p>© 2021 All rights reserved SaQi❤️</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
