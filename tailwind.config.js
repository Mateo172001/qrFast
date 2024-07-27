/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%", backgroundSize: "150% 150%", backgroundRotation: "0deg" },
          "50%": { backgroundPosition: "100% 50%", backgroundSize: "150% 150%", backgroundRotation: "180deg" },
          "100%": { backgroundPosition: "0% 50%", backgroundSize: "150% 150%", backgroundRotation: "360deg" },
        },
      },
      animation: {
        gradient: "gradient 10s ease infinite alternate",
      },
    },
  },
  plugins: [],
};
