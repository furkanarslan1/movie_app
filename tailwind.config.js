module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // diğer yollar...
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
