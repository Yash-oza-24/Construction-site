/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : "885px"
    },
    backgroundImage : {
      "hero-pattern": "url('/public/bg2.png')",
      "hero-appartment": "url('/public/view.avif')"
    }
  },
  plugins: [],
}