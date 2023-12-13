/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/app/app.component.html",
    "src/app/results-display/results-display.component.html",
  ],
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        white: "hsl(0, 0%, 100%)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
      },
      height: {
        "90vh": "90vh",
      },
      width: {
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
