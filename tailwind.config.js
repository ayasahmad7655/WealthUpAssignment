/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: ["responsive", "negative"],
      padding: ["responsive", "negative"],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "rgba-10-87-131-1": "rgba(10, 87, 131, 1)",
        "rgba-24-161-154-1": "rgba(24, 161, 154, 1)",
        "rgba-255-255-255-1": "rgba(255, 255, 255, 1)",
        "rgba-255-255-255-5": "rgba(255, 255, 255, 0.7)",
        "rgba-251-115-6-1": "rgba(251, 115, 6, 1)",
        "rgba-251-115-6-8": "rgba(251, 115, 6, 0.9)",
      },
    },
  },
  plugins: [],
};
