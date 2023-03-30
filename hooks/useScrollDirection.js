// import { useState, useEffect } from "react";

// const useScrollDirection = () => {
//   const [scrollDirection, setScrollDirection] = useState("down");
//   const [lastScrollTop, setLastScrollTop] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop = window.pageYOffset;

//       if (currentScrollTop > lastScrollTop) {
//         setScrollDirection("down");
//       } else {
//         setScrollDirection("up");
//       }
//       setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollTop]);

//   return scrollDirection;
// };

// export default useScrollDirection;

// import { useState, useEffect } from "react";

// const useScrollDirection = () => {
//   const [scrollDirection, setScrollDirection] = useState("up");
//   const [lastScrollTop, setLastScrollTop] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop = window.pageYOffset;

//       if (currentScrollTop > lastScrollTop) {
//         setScrollDirection("down");
//       } else {
//         setScrollDirection("up");
//       }
//       setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollTop]);

//   return scrollDirection;
// };

// export default useScrollDirection;

// import { useState, useEffect } from "react";

// const useScrollDirection = () => {
//   const [scrollDirection, setScrollDirection] = useState("up");
//   const [lastScrollTop, setLastScrollTop] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop = window.pageYOffset;

//       if (currentScrollTop > lastScrollTop) {
//         setScrollDirection("down");
//       } else {
//         setScrollDirection("up");
//       }
//       setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollTop]);

//   return scrollDirection;
// };

// export default useScrollDirection;

// import { useState, useEffect } from "react";

// const useScrollDirection = () => {
//   const [scrollDirection, setScrollDirection] = useState("down");
//   const [lastScrollTop, setLastScrollTop] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop = window.pageYOffset;

//       if (currentScrollTop > lastScrollTop) {
//         setScrollDirection("down");
//       } else {
//         setScrollDirection("up");
//       }
//       setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollTop]);

//   return scrollDirection;
// };

// export default useScrollDirection;

import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (!isAutoScrolling) {
        if (currentScrollTop > lastScrollTop) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, isAutoScrolling]);

  return [scrollDirection, setIsAutoScrolling];
};

export default useScrollDirection;
