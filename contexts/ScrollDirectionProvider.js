import { useState, useEffect } from "react";
import ScrollDirectionContext from "./ScrollDirectionContext";

const ScrollDirectionProvider = ({ children }) => {
  const [scrollDirection, setScrollDirection] = useState("up"); // Change initial state to 'up'
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <ScrollDirectionContext.Provider value={scrollDirection}>
      {children}
    </ScrollDirectionContext.Provider>
  );
};

export default ScrollDirectionProvider;
