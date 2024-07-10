import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import MyWork from "./Components/MyWork";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Gotop from "./Components/Gotop";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (position > 50) {

      setShowGoTop(true);
    } else {
      setShowGoTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
    return () => {
      window.removeEventListener('scroll', handleVisibleButton);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <Footer />
      {showGoTop && <Gotop />}
    </div>
  );
};

export default App;