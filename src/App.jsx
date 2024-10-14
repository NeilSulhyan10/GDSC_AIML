import { BackgroundLines } from "./components/ui/background-lines.jsx";
import Logo from "./assets/logo.png";
import Img1 from "./assets/1.png";
import Img2 from "./assets/2.png";
import Img3 from "./assets/3.png";
import Img4 from "./assets/4.png";
import Img5 from "./assets/5.png";
import Img6 from "./assets/6.png";
import Img7 from "./assets/7.png";
import Img8 from "./assets/8.png";
import Img9 from "./assets/9.png";
import Img10 from "./assets/10.png";
import Img11 from "./assets/11.png";
import Img12 from "./assets/12.png";
import Img13 from "./assets/13.png";
import Img14 from "./assets/14.png";
import Img15 from "./assets/15.png";
import Img16 from "./assets/16.png";
import Img17 from "./assets/17.png";
import Img18 from "./assets/18.png";
import Img19 from "./assets/18.png";
import Timer from "./Timer.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import AICard from "./AICard.jsx";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards.jsx";

function App() {
  const images = [
    { imageUrl: Img1, name: "Image 1" },
    { imageUrl: Img4, name: "Image 4" },
    { imageUrl: Img19, name: "Image 19" },
    { imageUrl: Img7, name: "Image 7" },
    { imageUrl: Img14, name: "Image 14" },
    { imageUrl: Img8, name: "Image 8" },
    { imageUrl: Img16, name: "Image 16" },
    { imageUrl: Img9, name: "Image 9" },
    { imageUrl: Img10, name: "Image 10" },
    { imageUrl: Img3, name: "Image 3" },
    { imageUrl: Img11, name: "Image 11" },
    { imageUrl: Img18, name: "Image 18" },
    { imageUrl: Img12, name: "Image 12" },
    { imageUrl: Img5, name: "Image 5" },
    { imageUrl: Img13, name: "Image 13" },
    { imageUrl: Img2, name: "Image 2" },
    { imageUrl: Img15, name: "Image 15" },
    { imageUrl: Img17, name: "Image 17" },
    { imageUrl: Img6, name: "Image 6" },
  ];

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffledImages = shuffleArray([...images]);

  const sessions = [
    {
      title: "Session 1",
      description:
        "Kickstart your journey into the world of AI and ML with an introductory session covering the basics.",
      link: "#",
    },
    {
      title: "Session 2",
      description:
        "Dive deeper into neural networks and discover how deep learning is shaping AI.",
      link: "#",
    },
    {
      title: "Session 3",
      description:
        "Explore real-world applications of AI and ML in various industries and get hands-on with projects.",
      link: "#",
    },
  ];

  return (
    <>
      <div className="flex justify-start w-[40%]">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="relative w-full h-full mt-8 mb-44">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-r from-blue-700 to-pink-700 text-4xl md:text-4xl lg:text-9xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight animate-pulse mb-8">
          AIML BootCamp
        </h2>
        <Timer />
      </div>
      <Card />
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
      <AICard />
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={shuffledImages}
          direction="right"
          speed="slow"
        />
      </div>
      <Footer />
      <BackgroundLines />
    </>
  );
}

export default App;
