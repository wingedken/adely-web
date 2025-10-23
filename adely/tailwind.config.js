/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "tanPearl": "var(--font-tan-pearl)",
        "mabryPro": "var(--font-mabry-pro)",
        "suisse": "var(--font-suisse)",
        "suisseWorks": "var(--font-sussieWorks)",
        "inter": "var(--font-inter)",
      },
      colors: {
        "black-2d": "#2D2D2D",
        "black-19": "#191919",
        "black-999": "#999999BF",
        "gray-db": "#DBDBDB1A",
        "gray-9999": "#99999900",
        "gray-ee": "#EEEEEE",
        "gray-de": "#DEDEDEE5",
        "gray-ded": "#DEDEDE",
        "black-0a1": "#0A1823",
        "gray-666": "#666666",
        "gray-4f4": "#4f4f4f",
        "gray-dfd": "#DFDFDF",
        "blue-2ed": "#2ED1FF",
        "black-0a14": "#0A142F",
        "gray-f1f1": "#F1F1F1",
      },
      boxShadow: {
        "custom": "-16px -10px 50px -7px #FFFFFF30",
      },
      dropShadow: {
        "custom-2": "0px 2px 6px 0px #FFFFFF2F"
      }
    },
  },
  plugins: [],
};
