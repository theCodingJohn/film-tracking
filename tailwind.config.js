module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        red: {
          dark: "#D21117",
          DEFAULT: "#ED1C24",
          light: "#EF3D43",
        },
      },
      borderWidth: {
        3: "3px",
      },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
