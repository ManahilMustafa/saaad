import React, { useEffect, useState } from "react";

const Data = () => {
  const subtitles = [
    "Cross-Platform App Developer",
    "Android App Developer",
    "Flutter App Developer",
  ];

  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < subtitles[index].length) {
      // Typing each character one by one
      const timeout = setTimeout(() => {
        setCurrentSubtitle((prev) => prev + subtitles[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      // Wait before moving to the next subtitle
      const pauseTimeout = setTimeout(() => {
        setCharIndex(0);
        setCurrentSubtitle("");
        setIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
      }, 1000); // Pause for 2 seconds before changing subtitle

      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, index, subtitles]);

  return (
    <div className="home__data">
      <h4 className="home__intro">I am</h4>
      <h1 className="home__title">Saad Khan</h1>
      <h3 className="home__subtitle">{currentSubtitle}</h3>

      <div className="i-buttons">
        <a href="#contact" className="buttonss button--flex">
          Hire Me
        </a>
        <a href="#services" className="buttonss button--flex">
          My Services
        </a>
      </div>
    </div>
  );
};

export default Data;
