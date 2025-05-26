// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animationDelay: {
            200: '200ms',
            300: '300ms',
            500: '500ms',
          },
        animation: {
          fade: 'fadeIn 1s ease-in-out',
          bounceOnce: 'bounceOnce 1s ease',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          bounceOnce: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
      },
    },
    plugins: [function ({ addUtilities }) {
        const newUtilities = {
          '.animation-delay-200': {
            'animation-delay': '200ms',
          },
          '.animation-delay-300': {
            'animation-delay': '300ms',
          },
          '.animation-delay-500': {
            'animation-delay': '500ms',
          },
        }
        addUtilities(newUtilities)
      }],
  }
  