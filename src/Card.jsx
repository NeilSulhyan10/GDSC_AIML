import React, { useState } from "react";
import AIImage from "./assets/Robo.png";

export default function Card() {
  const [cardStyle, setCardStyle] = useState({});
  const [imageStyle, setImageStyle] = useState({});

  const handleMouseMove = (e, setStyle) => {
    const { clientX, clientY } = e;
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;

    const rotateX = ((clientY - centerY) / height) * 30;
    const rotateY = ((clientX - centerX) / width) * -30;

    setStyle({
      transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 0.3s ease-out",
    });
  };

  const handleMouseLeave = (setStyle) => {
    setStyle({
      transform: `perspective(1500px) rotateX(0deg) rotateY(0deg)`,
      transition: "transform 1.5s ease-out",
    });
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-around items-center w-3/4 ml-auto mr-auto mt-6 font-poppins space-y-4 md:space-y-0 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mt-40 p-6 transition-transform "
      style={cardStyle}
      onMouseMove={(e) => handleMouseMove(e, setCardStyle)}
      onMouseLeave={() => handleMouseLeave(setCardStyle)}
    >
      <div className="md:w-1/2 px-4 md:px-0 text-center md:text-left">
        <h3 className="text-gray-300 text-base md:text-lg lg:text-xl font-medium">
          Google Developer Students' Club - WCE aims to inculcate the culture
          of development and problem-solving within local communities using
          technology.
          <span className="block mt-4">
            "Coming together is the beginning. Keeping together is progress.
            Working together is success."
          </span>
        </h3>
      </div>
      <div
        className="md:w-1/2 mt-4 md:mt-0 flex justify-center"
        style={imageStyle}
        onMouseMove={(e) => handleMouseMove(e, setImageStyle)}
        onMouseLeave={() => handleMouseLeave(setImageStyle)}
      >
        <img
          src={AIImage}
          alt="AI/ML Representation"
          className="w-1/2 h-auto transform transition-all duration-500 hover:scale-110"
        />
      </div>
    </div>
  );
}
