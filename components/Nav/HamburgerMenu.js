// import { useState, useEffect } from "react";

// const HamburgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="relative w-full">
//       {isMobile ? (
//         // Hamburger menu for mobile
//         <>
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col items-center justify-center w-12 h-12 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute top-0 right-0 mt-4 mr-4 z-20"
//           >
//             <div
//               className={`hamburger-menu w-6 h-0.5 bg-black transition duration-200 ease-in-out transform origin-center ${
//                 isOpen ? "rotate-45" : ""
//               }`}
//             ></div>
//             <div
//               className={`hamburger-menu w-6 h-0.5 bg-black my-1 transition duration-200 ease-in-out ${
//                 isOpen ? "opacity-0" : "opacity-100"
//               }`}
//             ></div>
//             <div
//               className={`hamburger-menu w-6 h-0.5 bg-black transition duration-200 ease-in-out transform origin-center ${
//                 isOpen ? "-rotate-45 mt-[-12px]" : ""
//               }`}
//             ></div>
//           </button>
//           {isOpen && (
//             <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-4 z-10">
//               <a href="#" className="text-2xl text-black hover:text-gray-600">
//                 Menu Item 1
//               </a>
//               <a href="#" className="text-2xl text-black hover:text-gray-600">
//                 Menu Item 2
//               </a>
//               <a href="#" className="text-2xl text-black hover:text-gray-600">
//                 Menu Item 3
//               </a>
//             </div>
//           )}
//         </>
//       ) : (
//         // Menu items for larger screens
//         <div className="flex items-center justify-end space-x-4">
//           <a href="#" className="text-black hover:text-gray-600">
//             Menu Item 1
//           </a>
//           <a href="#" className="text-black hover:text-gray-600">
//             Menu Item 2
//           </a>
//           <a href="#" className="text-black hover:text-gray-600">
//             Menu Item 3
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;

import { useState, useEffect } from "react";

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
    <div className="relative w-full">
      {isMobile ? (
        // Hamburger menu for mobile
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-center justify-center w-12 h-12 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute top-0 right-0 mt-4 mr-4 z-20"
          >
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
            <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-4 z-10">
              <MenuItem text="Menu Item 1" sectionId="credits" />
              <MenuItem text="Menu Item 2" sectionId="gear" />
              <MenuItem text="Menu Item 3" sectionId="rates" />
            </div>
          )}
        </>
      ) : (
        // Menu items for larger screens
        <div className="flex items-center justify-end space-x-4">
          <MenuItem text="Credits" sectionId="credits" />
          <MenuItem text="Gear" sectionId="gear" />
          <MenuItem text="Rates" sectionId="rates" />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
