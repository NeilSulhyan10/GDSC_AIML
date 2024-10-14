import React from "react";
import { BackgroundLines } from "./components/ui/background-lines.jsx";
import Logo from "./assets/logo.png";
import Timer from "./Timer.jsx";
import AIImage from "./assets/Robo.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function App() {
  const sessions = [
    {
      title: "Introduction to AIML",
      date: "October 20, 2024",
      description:
        "Kickstart your journey into the world of AI and ML with an introductory session covering the basics.",
      link: "#",
    },
    {
      title: "Deep Learning Basics",
      date: "October 27, 2024",
      description:
        "Dive deeper into neural networks and discover how deep learning is shaping AI.",
      link: "#",
    },
    {
      title: "AI/ML Applications",
      date: "November 3, 2024",
      description:
        "Explore real-world applications of AI and ML in various industries and get hands-on with projects.",
      link: "#",
    },
  ];

  return (
    <>
      <div className="absolute top-0 left-0 p-2 w-[10%]">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="relative w-full h-full mt-28">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-9xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight animate-pulse mb-8">
          AIML Bootcamp
        </h2>
        <Timer />
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center w-full mt-6 font-poppins space-y-4 md:space-y-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mt-40 p-6">
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
        <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
          <img
            src={AIImage}
            alt="AI/ML Representation"
            className="w-1/2 h-auto"
          />
        </div>
      </div>

      <div>
        <VerticalTimeline>
          {sessions.map((session, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "12px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.1)",
              }}
              date={session.date}
              iconStyle={{ background: "#1e3a8a", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title text-xl font-semibold text-blue-600 dark:text-blue-300">
                {session.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {session.description}
              </p>
              <div className="mt-4">
                <a
                  href={session.link}
                  className="inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
                >
                  RSVP Now
                </a>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <BackgroundLines />
    </>
  );
}

export default App;
