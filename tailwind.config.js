const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // THEME 1
        // bg: "hsl(222, 26%, 31%)",
        // color2: "hsl(223, 31%, 20%)",
        // color3: " hsl(224, 36%, 15%)",
        // color4: "hsl(225, 21%, 49%)",
        // color5: "hsl(224, 28%, 35%)",
        // color6: " hsl(6, 63%, 50%)",
        // color7: "hsl(6, 70%, 34%)",
        // color8: "hsl(30, 25%, 89%)",
        // color9: "hsl(28, 16%, 65%)",
        // color10: "hsl(221, 14%, 31%)",
        // color11: "hsl(0, 0%, 100%)",
        // THEME2
        // color12: " ",
        // color13: " ",
        // color14: " ",
        // color15: " ",
        // color16: " ",
        // color17: " ",
        // color18: " ",
        // color19: " ",
        // color20: " ",
        // color21: " ",
        // color22: " ",
      },
      fontFamily: {
        custom: ["League Spartan"],
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        // Backgrounds
        main_bg: "hsl(0, 0%, 90%)",
        toggle_bg: "hsl(0, 5%, 81%)",
        screen_bg: "hsl(0, 0%, 93%)",
        // Key
        color1: "hsl(185, 42%, 37%)",
        color2: "hsl(185, 58%, 25%)",
        color3: "hsl(25, 95%, 40%)",
        color4: "hsl(25, 99%, 27%)",
        color5: "hsl(30, 25%, 89%)",
        color6: "hsl(28, 16%, 65%)",
        // Text
        color7: "hsl(60, 10%, 19%)",
        color8: "hsl(0, 0%, 100%)",
      },
      dark: {
        // Backgrounds
        main_bg: "hsl(222, 26%, 31%)",
        toggle_bg: "hsl(223, 31%, 20%)",
        screen_bg: "hsl(224, 36%, 15%)",
        // Key
        color1: "hsl(225, 21%, 49%)",
        color2: "hsl(224, 28%, 35%)",
        color3: "hsl(6, 63%, 50%)",
        color4: "hsl(6, 70%, 34%)",
        color5: "hsl(30, 25%, 89%)",
        color6: "hsl(28, 16%, 65%)",
        // Text
        color7: "hsl(221, 14%, 31%)",
        color8: "hsl(0, 0%, 100%)",
      },

      // purple: {
      //   // Backgrounds
      //   main_bg: "hsl(268, 75%, 9%)",
      //   toggle_bg: "hsl(268, 71%, 12%)",
      //   screen_bg: " hsl(268, 71%, 12%)",
      //   // Key
      //   color1: "hsl(281, 89%, 26%)",
      //   color2: "hsl(285, 91%, 52%)",
      //   color3: " hsl(176, 100%, 44%)",
      //   color4: "hsl(177, 92%, 70%)",
      //   color5: "hsl(268, 47%, 21%)",
      //   color6: " hsl(290, 70%, 36%)",
      //   // Text
      //   color7: "hsl(52, 100%, 62%)",
      //   color8: "hsl(0, 0%, 100%)",
      //   color9: "hsl(198, 20%, 13%)",
      // },
    }),
  ],
};
