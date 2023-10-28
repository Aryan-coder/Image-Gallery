/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      keyframes: {
        unblur: {
          '100%': {transform: 'filter blur-0'}
        }
      },
      animation: {
        unblur: "unblur 2s ease forward"
      }
    },
  },
  plugins: [],
}

