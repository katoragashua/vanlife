/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    colors: {
      orange: "#FF8C38",
      "orange-lighter": "#FFEAD0",
      "orange-light": "#FFCC8D",
      "orange-dark": "#E17654",
    },
    extend: {
      backgroundImage: {
        "home-bg": "url('./assets/images/home-bg.jpg')",
        "about-bg": "url('./assets/images/about-bg.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
