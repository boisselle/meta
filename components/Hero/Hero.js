// import React from "react";

// const Hero = () => {
//   return (
//     <div>
//       <h1>Hero</h1>
//       <p>Here we list the Hero.</p>
//     </div>
//   );
// };

// export default Hero;

import Image from "next/image";

const Hero = ({ imageUrl, children }) => {
  return (
    <div className="relative h-screen">
      <Image
        src={imageUrl}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">{children}</div>
      </div>
    </div>
  );
};

export default Hero;
