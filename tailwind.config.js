/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }, 
    container:{
      center: true,
      padding: '16px',
    },
    fontfamily:{
      roboto: ['Roboto', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
        dark: '#0f172a',
        blue: '#3593c7',
        green: '#08BDBA',
        android: '#3DDC84',
        figma: '#F24E1E',
        canva: '#00C4CC',
      },
    },
  },
  plugins: [],
}
