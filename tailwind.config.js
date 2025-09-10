/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans","sans-serif"],
        dm: ["DM Sans"],
        clash: ["Clash Display", "sans-serif"],
      },
      animation: {
        'modal-slide-in': 'modalSlideIn 0.3s ease-out',
      },
      keyframes: {
        modalSlideIn: {
          from: {
            opacity: '0',
            transform: 'translateY(-50px) scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
