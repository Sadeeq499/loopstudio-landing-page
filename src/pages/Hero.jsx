import React, { useState } from "react";
import Images from "../assets/Images";
import { menuItems } from "../Data/data";

function Hero() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <section id="hero">
        {/* Hero Container */}
        <div className="container max-w-6xl mx-auto px-6 py-12 lg:px-0">
          {/* Menu /Logo Container */}
          <nav className="flex items-center justify-between font-bold text-white">
            {/* Logo */}
            <img src={Images.Logo} alt="logo" />

            {/* Menu */}
            <ul className="hidden h-10 font-Alata  md:flex md:space-x-8">
              {menuItems.map((item) => (
                <li className="group" key={item.id}>
                  <a href={item.link} className="text-base">
                    {item.name}
                  </a>
                  <div className="w-0 h-1 bg-white group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </li>
              ))}
            </ul>
            {/* hamburger */}

            <div className=" md:hidden">
              <button
                className={`focus:outline-none z-40  ${
                  showMenu ? "open " : "block"
                }   hamburger md:hidden`}
                onClick={() => setShowMenu(!showMenu)}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>
          {/* mobile menu */}
          <div
            className={`absolute top-0 bottom-0 left-0  ${
              showMenu ? "flex" : "hidden"
            } flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-8  text-lg text-white uppercase bg-black`}
          >
            {menuItems.map((item) => (
              <div className="mx-20">
                <a href="#" className="hover:text-pink-500 ">
                  {" "}
                  {item.name}
                </a>
              </div>
            ))}
          </div>
          <div
            className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32
        md:mx-0 md:text-6xl"
          >
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>
      {/* // Feature Section */}
      <section id="features">
        {/* feature container */}
        <div className="relative container flex flex-col max-w-6xl mx-auto my-28 px-6 text-gray-900 md:flex-row lg:px-0 md:mb-96 lg:mb-0">
          {/* feature image */}
          <img
            src={Images.DeskInteractive}
            alt="feature"
            className="w-full h-full md:w-1/2"
          />
          {/* feature text */}
          <div className="top-40  pr-0 bg-white md:absolute md:right-0 md:py-10 md:pl-20">
            <h2 className="max-w-xl mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in interactive vr
            </h2>
            <p className="max-w-md mb-6 font-sans text-base text-center text-gray-700 md:text-lg md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
