/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: { 
        fontFamily: { 
            "jost": ["Jost", "sans-serif"] 
        },
        colors: {
          'primary': '#8F4DA7',
          'secondary':'#171717',
          'bordergray':'#eaebee',
          'graytext':'#707070'
        },
        spacing: {
          '70': '70px',
        },
        boxShadow: {
          'proshadow': '0 3px 14px -7px rgb(15, 9, 15)',
        },
    }, 
  }, 
  plugins: [],
}

