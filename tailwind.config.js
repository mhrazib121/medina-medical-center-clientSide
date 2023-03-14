/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // daisyui: {
  //   themes: [
  //     {
  //       medinatheme: {

  //         primary: '#2CAEE2',

  //         secondary: "#14457B",

  //         accent: "#1FB2A5",

  //         neutral: "#191D24",

  //         "base-100": "#ffffff",

  //         info: "#3ABFF8",

  //         success: "#36D399",

  //         warning: "#FBBD23",

  //         error: "#F87272",
  //       },
  //     },
  //   ],
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
