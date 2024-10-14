import React, { useState, useEffect } from "react";

export default function Timer(){
    const eventDate = new Date("2024-10-21T09:00:00");
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

    return(
        <div className="flex justify-center space-x-2 md:space-x-4">
          <div className="flex flex-col items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-red-600 to-gray-500 text-black rounded-full shadow-lg">
            <span className="text-lg md:text-4xl font-bold">{timeRemaining.days}</span>
            <span className="text-xs md:text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-green-600 to-gray-500 text-black rounded-full shadow-lg">
            <span className="text-lg md:text-4xl font-bold">{timeRemaining.hours}</span>
            <span className="text-xs md:text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-yellow-600 to-gray-500 text-black rounded-full shadow-lg">
            <span className="text-lg md:text-4xl font-bold">{timeRemaining.minutes}</span>
            <span className="text-xs md:text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-blue-600 to-gray-500 text-black rounded-full shadow-lg">
            <span className="text-lg md:text-4xl font-bold">{timeRemaining.seconds}</span>
            <span className="text-xs md:text-sm">Seconds</span>
          </div>
        </div>
    )
}