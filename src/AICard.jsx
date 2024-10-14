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
      className="flex flex-col md:flex-row justify-around items-center max-w-6xl mx-auto mt-6 font-poppins space-y-4 md:space-y-0 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-6 transition-transform mb-8"
      style={cardStyle}
      onMouseMove={(e) => handleMouseMove(e, setCardStyle)}
      onMouseLeave={() => handleMouseLeave(setCardStyle)}
    >
      <div className="md:w-full px-4 md:px-0 text-center md:text-left">
        <h3 className="text-gray-300 text-left md:text-lg lg:text-md font-small">
          Join us for an exciting three-day AIML event hosted by {" "}
          <span className="text-red-500 font-bold">
            G
          </span>
          <span className="text-green-500 font-bold">
            D
          </span>
          <span className="text-yellow-500 font-bold">
            S
          </span>
          <span className="text-blue-500 font-bold">
            C
          </span>{" "}
          WCE from <span className="text-white font-bold">21st October to 23rd October</span>. Dive deep into the world of 
          <span className="text-yellow-500 font-bold"> Artificial Intelligence</span> and 
          <span className="text-blue-500 font-bold"> Machine Learning</span> through a series of interactive sessions designed to enhance your 
          <span className="text-green-500 font-bold"> knowledge</span> and 
          <span className="text-red-500 font-bold"> skills</span>. Each session will be packed with insights, hands-on projects, and opportunities to engage with 
          <span className="text-green-500 font-bold"> experts</span> in the field. Please note that RSVPing is 
          <span className="text-blue-500 font-bold"> mandatory</span> for all three sessions to ensure your spot. Don’t miss out on this amazing opportunity to 
          <span className="text-yellow-500 font-bold"> learn</span>, 
          <span className="text-red-500 font-bold"> grow</span>, and <span className="text-green-500 font-bold"> connect </span> with fellow tech enthusiasts!
        </h3>
      </div>
    </div>
  );
}
