import React from "react";
import Images from "../assets/Images";
import { creationItemsOne, creationItemsTwo } from "../Data/data";

function Creation() {
  return (
    <>
      <section id="creation" className="md:mt-44 md:mx-10 lg:mx-0">
        {/* Creation Container */}
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          {/* Creation */}
          <div className="flex justify-center mb-20 md:justify-between ">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creation
            </h2>
            <button className="hidden btn">See All</button>
          </div>
        </div>

        {/* ----------------------------Image Container---------------------------------------------------- */}

        {/* item container 1*/}
        <div className="item-container">
          {/* item */}
          {creationItemsOne.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden md:w-1/4"
            >
              {/* Desktop Image */}
              <img
                src={item.image}
                alt=""
                className="hidden md:block image-animation"
              />
              {/* Mobile Image */}
              <img
                src={item.imageMobile}
                alt=""
                className="md:hidden image-animation"
              />
              {/* item Gradient */}
              <div className="item-Gradient md:-mx-6 lg:mx-0 ">
                {/* item text */}
                <h5>{item.name}</h5>
              </div>
            </div>
          ))}
        </div>
        {/* item container 2*/}
        <div className="item-container mt-10">
          {/* item */}
          {creationItemsTwo.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden md:w-1/4"
            >
              {/* Desktop Image */}
              <img
                src={item.image}
                alt=""
                className="hidden md:block image-animation"
              />
              {/* Mobile Image */}
              <img
                src={item.imageMobile}
                alt=""
                className="md:hidden image-animation"
              />
              {/* item Gradient */}
              <div className="item-Gradient md:-mx-6 lg:mx-0 ">
                {/* item text */}
                <h5>{item.name}</h5>
              </div>
            </div>
          ))}
        </div>
        {/* button container */}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn max-w-sm md:hidden">See All</button>
        </div>
      </section>
    </>
  );
}

export default Creation;
