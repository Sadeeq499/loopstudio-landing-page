/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkGRay: "hsl(0, 0%, 55%)",
        VeryDarkGray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        Alata: ["Alata", "sans-serif"],
        JosefinSans: ["Josefin Sans", "sans-serif"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
        xl: "1920px",
      },
      letterSpacing: {
        widest: "0.3em",
      },
    },

    plugins: [],
  },
};
