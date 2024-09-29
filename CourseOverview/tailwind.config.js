/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'buffer-left-right': 'buffer 1.5s ease-in-out infinite',
      },
      keyframes: {
        buffer: {
          '0%': { backgroundPosition: '-200% 0' },
          '50%': { backgroundPosition: '100% 0' },
          '100%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
}

