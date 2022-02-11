// Libraries
import React, { useState, useEffect } from "react";

// Components
import HeaderFixed from "./Headerfixed";
import HeaderScroll from "./HeaderScroll";

const Header = () => {
  const [header, setHeader] = useState(true);

  // Changing Headers on Scrolling
  const listenScrollEvent = () =>
    window.scrollY < 73 ? setHeader(true) : setHeader(false);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return <>{header ? <HeaderFixed /> : <HeaderScroll />}</>;
};

export default Header;
