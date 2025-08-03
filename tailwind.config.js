/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceTilt: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
            transformOrigin: 'top center',
          },
          '30%': {
            transform: 'translateY(-10%) rotate(8deg)',
            transformOrigin: 'top center',
          },
          '60%': {
            transform: 'translateY(-6%) rotate(-6deg)',
            transformOrigin: 'top center',
          },
        },
      },
      animation: {
        bounceTilt: 'bounceTilt 0.8s ease-in-out',
      },
      fontFamily: {
        cal: ['"Cal Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
