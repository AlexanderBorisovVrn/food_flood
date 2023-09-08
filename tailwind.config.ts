import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#FF5900",
      dark: "#A63A00",
      secondary: "#FF9A00",
      third: "#F60018",
      gray: "#E1E5F7",
      fourth:'#00B060',
      background: "#575A6B",
      white: "#FFFFFF",
      black:'#000000',
      green:'#00B358'
      
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'logo': "url('/logo/logo_txt.png')",
        'offer-mobile':"url(/offer/offer_mobile.png)",
        'offer-md':"url(/offer/offer_md.png)",
        'offer-back':"url(/offer/offer_background.jpg)",

      }
      ,
      boxShadow:{
        'bx':'2px 2px 10px black;'
      },
     
    },
  },
  plugins: [],
};
export default config;
