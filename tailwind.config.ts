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
