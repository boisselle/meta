// import React from "react";

// const Card = ({ children }) => {
//   return (
//     <div className="w-[400px] md:w-[550px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] mx-auto rounded shadow-2xl-gradient">
//       {children}
//     </div>
//   );
// };

// export default Card;

import React from "react";

const Card = ({ className, children }) => {
  return (
    <div
      className={`w-[400px] md:w-[550px] lg:max-w-[480px] xl:max-w-[720px] 2xl:max-w-[720px] mx-auto rounded shadow-2xl-gradient ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
