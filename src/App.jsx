import React, { useState, useEffect } from "react";
import { BackgroundLines } from "./components/ui/background-lines.jsx";
import Logo from "./assets/logo.png";

function App() {
  const eventDate = new Date("2024-10-25T09:00:00");
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = eventDate - now;

      if (timeDiff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 p-2 w-[10%]">
        <img src={Logo} />
      </div>
      <BackgroundLines className="w-full h-screen flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-9xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight animate-pulse">
          AIML Bootcamp
        </h2>
        <div className="flex justify-center space-x-2 md:space-x-4">
          <div className="flex flex-col items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-gray-300 to-gray-800 text-black rounded-full shadow-lg">
            <span className="text-lg md:text-4xl font-bold">{timeRemaining.days}</span>
            <span className="text-xs md:text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-gray-300 to-gray-800 text-black rounded-full shadow-lg">
            <span className="text-lg md:text-4xl font-bold">{timeRemaining.hours}</span>
            <span className="text-xs md:text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-gray-300 to-gray-800 text-black rounded-full shadow-lg">
            <span className="text-lg md:text-4xl font-bold">{timeRemaining.minutes}</span>
            <span className="text-xs md:text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-gray-300 to-gray-800 text-black rounded-full shadow-lg">
            <span className="text-lg md:text-4xl font-bold">{timeRemaining.seconds}</span>
            <span className="text-xs md:text-sm">Seconds</span>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
}

export default App;
