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
    <button
      onClick={() => scrollTo(sectionId)}
      // Ensure the button looks like a link but behaves like a button
      className={`text-2xl hover:text-cyan-200 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-2 ${
        isMobile && isOpen ? "text-white" : "text-black"
      }`}
    >
      {text}
    </button>
  );

  return (
    // <div className="relative w-full px-16 py-6">
    //   {isMobile ? (
    //     // Hamburger menu for mobile
    //     <>
    //       <Logo />
    //       <button
    //         onClick={() => setIsOpen(!isOpen)}
    //         // 1. Added aria-label so screen readers don't just say "button"
    //         // 2. Added aria-expanded to communicate the state of the menu
    //         aria-label={isOpen ? "Close menu" : "Open menu"}
    //         aria-expanded={isOpen}
    //         // 3. Restored focus ring for keyboard navigation (Essential for A11y)
    //         className="flex flex-col items-center justify-center w-12 h-12 p-1 rounded-lg absolute top-0 right-0 mt-4 mr-4 z-20 focus:outline-none focus:ring-2 focus:ring-slate-900"
    //       >
    //         {/* Hamburger Lines */}
    //         {/* 4. Added aria-hidden to the lines because they are purely decorative */}
    //         <div
    //           aria-hidden="true"
    //           className={`hamburger-menu w-6 h-0.5 bg-black transition duration-200 ease-in-out transform origin-center ${
    //             isOpen ? "rotate-45 bg-white" : ""
    //           }`}
    //         ></div>
    //         <div
    //           aria-hidden="true"
    //           className={`hamburger-menu w-6 h-0.5 bg-black my-1 transition duration-200 ease-in-out ${
    //             isOpen ? "opacity-0" : "opacity-100"
    //           }`}
    //         ></div>
    //         <div
    //           aria-hidden="true"
    //           className={`hamburger-menu w-6 h-0.5 bg-black transition duration-200 ease-in-out transform origin-center ${
    //             isOpen ? "-rotate-45 mt-[-12px] bg-white" : ""
    //           }`}
    //         ></div>
    //       </button>
          
    //       {isOpen && (
    //             <nav 
    //               // aria-label helps users distinguish this from other navs (like the footer)
    //               aria-label="Mobile navigation"
    //               className="bg-black fixed inset-0 w-full h-full z-10"
    //               style={{ height: "100vh" }}
    //             >
    //               <ul className="flex flex-col items-center justify-center space-y-12 h-full w-full list-none p-0 m-0">
    //                 {/* <li><MenuItem text="Credits" sectionId="credits" /></li> */}
    //                 <li><MenuItem text="Gear" sectionId="gear" /></li>
    //                 <li><MenuItem text="Rates" sectionId="rates" /></li>
    //                 <li><MenuItem text="About" sectionId="about" /></li>
    //               </ul>
    //             </nav>
    //           )}
              

    //           <nav aria-label="Main navigation" className="flex items-center justify-end space-x-8 px-6">
    //             <ul className="flex items-center space-x-8 list-none">
    //               {/* <li><MenuItem text="Credits" sectionId="credits" /></li> */}
    //               <li><MenuItem text="Gear & Rates" sectionId="rates" /></li>
    //               <li><MenuItem text="About" sectionId="about" /></li>
    //             </ul>
    //           </nav>
            
    //     </>
    //   ) : (
    //     // Menu items for larger screens
    //     <>
    //       {/* <Logo /> */}
    //       <div className="float-left">
    //         <Logo />
    //       </div>

    //       <div className="flex items-center justify-end space-x-8 px-6">
    //         {/* <MenuItem text="Credits" sectionId="credits" /> */}
    //         <MenuItem text="Gear & Rates" sectionId="rates" />
    //         <MenuItem text="About" sectionId="about" />
    //       </div>
    //     </>
    //   )}
    // </div>
    <div className="relative w-full px-16 py-6">
  {isMobile ? (
    // --- MOBILE VIEW ---
    <>
      <Logo />
      
      {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex flex-col items-center justify-center w-12 h-12 p-1 rounded-lg absolute top-0 right-0 mt-4 mr-4 z-20 focus:outline-none focus:ring-2 focus:ring-slate-900"
        >
          <div aria-hidden="true" className={`hamburger-menu w-6 h-0.5 bg-black transition duration-200 ease-in-out transform origin-center ${isOpen ? "rotate-45 bg-white" : ""}`}></div>
          <div aria-hidden="true" className={`hamburger-menu w-6 h-0.5 bg-black my-1 transition duration-200 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}></div>
          <div aria-hidden="true" className={`hamburger-menu w-6 h-0.5 bg-black transition duration-200 ease-in-out transform origin-center ${isOpen ? "-rotate-45 mt-[-12px] bg-white" : ""}`}></div>
        </button>
        
        {/* ONLY this nav should exist for mobile. 
            The "Main navigation" nav you had below this was causing the duplicate links.
        */}
        {isOpen && (
          <nav 
            aria-label="Mobile navigation"
            className="bg-black fixed inset-0 w-full h-full z-10"
            style={{ height: "100vh" }}
          >
            <ul className="flex flex-col items-center justify-center space-y-12 h-full w-full list-none p-0 m-0">
              <li><MenuItem text="Gear" sectionId="gear" /></li>
              <li><MenuItem text="Rates" sectionId="rates" /></li>
              <li><MenuItem text="About" sectionId="about" /></li>
            </ul>
          </nav>
        )}
      </>
    ) : (
      // --- DESKTOP VIEW ---
      <>
        <div className="float-left">
          <Logo />
        </div>

        <nav aria-label="Main navigation" className="flex items-center justify-end space-x-8 px-6">
          <ul className="flex items-center space-x-8 list-none">
            <li><MenuItem text="Gear" sectionId="gear" /></li>
            <li><MenuItem text="Rates" sectionId="rates" /></li>
            <li><MenuItem text="About" sectionId="about" /></li>
          </ul>
        </nav>
      </>
    )}
  </div>
  );
};

export default HamburgerMenu;
