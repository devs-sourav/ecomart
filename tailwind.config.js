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
          'bordergray':'#eaebee'
        },
        spacing: {
          '70': '70px',
        } 
    }, 
  }, 
  plugins: [],
}

