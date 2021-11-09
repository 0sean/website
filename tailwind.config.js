module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        90: "#191919",
        80: "#272727",
        70: "#323232",
        from: "#8e2de2",
        to: "#4a00e0"
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
