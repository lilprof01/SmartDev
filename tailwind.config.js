module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      screens: {
        xs: "365px", // custom breakpoint beyond 360px
      },
    },
  },
  plugins: [],
};
