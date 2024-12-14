import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans Arabic", "sans-serif"], // اجعل الخط الافتراضي هو الخط العربي
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#232f3e",
          secondary: "#007955",
          accent: "#131921",
          neutral: "#002926",
          "base-100": "#e3e6e6",
          info: "#008ace",
          success: "#009b6d",
          warning: "#d96d00",
          error: "#ff3c4f",
        },
      },
    ],
  },
};
