import { useState, useEffect } from "react";
import Logo from "./Logo/Logo";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollTo = (sectionId) => {
    setIsOpen(false);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MenuItem = ({ text, sectionId }) => (
    <a
      onClick={() => scrollTo(sectionId)}
      className="text-2xl text-black hover:text-gray-600 cursor-pointer"
    >
      {text}
    </a>
  );

  return (
    <div className="relative w-full px-16 py-6">
      {isMobile ? (
        // Hamburger menu for mobile
        <>
          {/* <p>METAMORPH SOUND</p> */}
          <Logo />
          <button
            onClick={() => setIsOpen(!isOpen)}
            // className="flex flex-col items-center justify-center w-12 h-12 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute top-0 right-0 mt-4 mr-4 z-20"
            className="flex flex-col items-center justify-center w-12 h-12 p-1 rounded-lg absolute top-0 right-0 mt-4 mr-4 z-20"
          >
            {/* Hamburger Lines */}
            <div
              className={`hamburger-menu w-6 h-0.5 bg-black transition duration-200 ease-in-out transform origin-center ${
                isOpen ? "rotate-45" : ""
              }`}
            ></div>
            <div
              className={`hamburger-menu w-6 h-0.5 bg-black my-1 transition duration-200 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`hamburger-menu w-6 h-0.5 bg-black transition duration-200 ease-in-out transform origin-center ${
                isOpen ? "-rotate-45 mt-[-12px]" : ""
              }`}
            ></div>

          </button>
          {isOpen && (
            <>
              <div
                className="bg-black text-white top inset-0 w-full h-full flex flex-col items-center justify-center space-y-12 z-10"
                //   style={{ margin: "auto", top: 0, left: 0, right: 0, bottom: 0 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <div className="bg-white bg-opacity-50 backdrop-blur-md backdrop-brightness-125 p-4 fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-4 z-10"> */}
                <MenuItem text="Credits" sectionId="credits" />
                <MenuItem text="Gear" sectionId="gear" />
                <MenuItem text="Rates" sectionId="rates" />
                <MenuItem text="About" sectionId="about" />
              </div>
            </>
          )}
        </>
      ) : (
        // Menu items for larger screens
        <>
          {/* <Logo /> */}
          <div className="float-left">
            <Logo />
          </div>

          <div className="flex items-center justify-end space-x-8 px-6">
            <MenuItem text="Credits" sectionId="credits" />
            <MenuItem text="Gear & Rates" sectionId="rates" />
            {/* <MenuItem text="Rates" sectionId="rates" /> */}
            <MenuItem text="About" sectionId="about" />
          </div>
        </>
      )}
    </div>
  );
};

export default HamburgerMenu;
