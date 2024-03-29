module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robot: ["Roboto", "sans-serif"],
      },
      space: {
        "-1": "-3.25rem",
      },
      boxShadow: {
        "solid-black": "3px 3px 1px 0 rgba(0,0,0,1)",
      },
      width: {
        '60': '60px',
        '90': '90px',
        '120': '120px',
      },
      colors: {
        'light-blue': '#03a9f4', // You can define your custom color here
        'banner-blue': '#4688f7'
      },
    },
    screens: {
      // md: "600px",
      // lg: "800px",
      // xl: "1200px",
      // "2xl": "1536px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    backgroundImage: theme => ({
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      // ... Add other gradients as needed
   }),
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
