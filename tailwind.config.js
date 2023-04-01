module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: "600px",
      lg: "800px",
      xl: "1200px",
      "2xl": "1536px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".shadow-2xl-gradient": {
          boxShadow:
            "0 25px 50px -12px rgba(66, 153, 225, 0.25), 0 10px 10px -10px rgba(237, 137, 54, 0.25)",
        },
        ".no-wrap": {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
