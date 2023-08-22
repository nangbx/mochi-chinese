/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "lesson-background-normal": "url('../public/images/lesson_bg.png')",
        "lesson-background-lock":
          "url('https://chinese.mochidemy.com/_next/static/media/card_lesson_silver.e80c6d4e.jpg')",
        "lesson-background-done": "url('../public/images/lesson_bg_done.png')",
        "learn-background":
          "url('https://chinese.mochidemy.com/_next/static/media/background.79a86ace.jpg')",
        "audio-background":
          "url('https://chinese.mochidemy.com/_next/static/media/main_button_speake.034103f4.png')",
      },
      fontFamily: {
        riffic: ["RifficFree", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
