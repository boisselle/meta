import React from "react";

const RateCard = ({ className, children }) => {
  return (
    <div
      // className={`w-[400px] md:w-[550px] lg:max-w-[480px] xl:max-w-[720px] 2xl:max-w-[720px] mx-auto rounded ${className}`}
      className={`p-8 border-2 mb-8 border-black m-4 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default RateCard;
