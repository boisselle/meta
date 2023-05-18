import React from "react";

const BackgroundGradient = ({ color1, color2 }) => {
  const colorMapping = {
    "green-400": "from-green-400",
    "green-500": "via-green-500",
    "blue-500": "to-blue-500",
    "to-sky-100": "to-sky-100",
    "from-sky-100": "from-sky-100",
    "to-zinc-100": "to-zinc-100",
    "from-zinc-100": "from-zinc-100",
    "to-yellow-300": "to-yellow-300",
    "from-yellow-300": "from-yellow-300",
    "from-emerald-100": "from-emerald-100",
    "to-emerald-100": "to-emerald-100",
    // Add more colors here as needed
  };

  return (
    <>
      <section
        className={`h-12 bg-gradient-to-b ${colorMapping[color1]} ${colorMapping[color2]}`}
      ></section>
    </>
  );
};

export default BackgroundGradient;
