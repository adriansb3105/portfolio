/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)"
      },
      keyframes: {
        bounce: {
          from: { transform: "translateY(10px)"},
          to: { transform: "translateY(0)"}
        },
        slideUp: {
          from: { transform: 'translateY(100%)'},
          to: { transform: 'translateY(0)'}
        }
      }
    },
  },
  plugins: [],
}
