/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/ *.{ html, js }"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      backgroundColor: {
        'rgba-74-144-245-21': 'rgba(74, 144, 245, 0.21)',
        'rgba-125-186-244-1295': 'rgba(125, 186, 244, 0.1295)',
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
    },
  },
  plugins: [],
}
