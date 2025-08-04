import forms from "@tailwindcss/forms"
import { green, emerald, amber, red, sky, zinc } from "tailwindcss/colors"

import type { Config } from "tailwindcss"

export const colors = {
  primary: green,
  secondary: zinc,
  success: emerald,
  warning: amber,
  danger: red,
  info: sky,
  green: {
    focusin: "#4C6547",
    500: "#63845C",
    400: "#6F8F6E"
  },
  gray: {
    bg: "#F0F4F1",
    bg2: "#F8F8F8",
    stroke: "#E8E8E8",
    stroke1: "#E0E5E3",
    ...zinc
  },
  _black: {
    100: "#323232",
    200: "#585958",
    300: "#848484"
  }
}

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{vue,ts,tsx,html}"],
  plugins: [forms({ strategy: "class" })],
  theme: {
    extend: {
      colors,
      fontSize: {
        // Headlines
        "headline-1": ["58px", { lineHeight: "74px" }],
        "headline-2": ["50px", { lineHeight: "64px" }],
        "headline-3": ["40px", { lineHeight: "48px" }],
        "headline-4": ["30px", { lineHeight: "36px" }],

        // Subtitles
        "subtitle-24": ["24px", { lineHeight: "29px" }],
        "subtitle-22": ["22px", { lineHeight: "28px" }],
        "subtitle-20": ["20px", { lineHeight: "25px" }],
        "subtitle-18": ["18px", { lineHeight: "23px" }],
        "subtitle-16": ["16px", { lineHeight: "22px" }],

        // Body
        "body-20": ["20px", { lineHeight: "25px" }],
        "body-18": ["18px", { lineHeight: "23px" }],
        "body-17": ["17px", { lineHeight: "22px" }],
        "body-16": ["16px", { lineHeight: "20px" }],

        // Mobile (used via responsive classes)
        "mobile-headline-1": ["32px", { lineHeight: "41px" }],
        "mobile-headline-2": ["28px", { lineHeight: "36px" }],
        "mobile-subtitle-22": ["20px", { lineHeight: "25px" }],
        "mobile-subtitle-20": ["18px", { lineHeight: "23px" }],
        "mobile-subtitle-18": ["16px", { lineHeight: "20px" }],
        "mobile-subtitle-16": ["16px", { lineHeight: "22px" }],
        "mobile-body-17": ["15px", { lineHeight: "19px" }],
        "mobile-body-16": ["14px", { lineHeight: "18px" }],
        "mobile-body-15": ["15px", { lineHeight: "19px" }],
        "mobile-body-14": ["14px", { lineHeight: "18px" }]
      },
      fontFamily: {
        sans: ["Onest", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        onest: ["Onest", "sans-serif"]
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1920px"
      }
    }
  }
}

export default config
