export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      screens: {
        'mobile': '576px',
        // => @media (min-width: 640px) { ... }
  
        'tablet': '768px',
        // => @media (min-width: 1024px) { ... }
  
        'laptop': '992px',
        // => @media (min-width: 1280px) { ... }

        'desktop': '1200px',
        // => @media (min-width: 1280px) { ... }

        'tv': '1440px',
        // => @media (min-width: 1280px) { ... }
      },
      animation: {
        spin_slow: 'spin 12s linear infinite'
    },
      fontFamily: {
        Outfit:['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif']
    },  
    },
  },
  plugins: [],
}