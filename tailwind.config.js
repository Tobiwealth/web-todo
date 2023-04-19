/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkk": "rgb(3,50,74)",
        "bright-blue": "hsl(220, 98%, 61%)",
        "very-light-ray": "hsl(0, 0%, 98%)",
        "very-light-rayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-bluee": "hsl(235, 19%, 35%)",
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue": "hsl(234, 39%, 85%)",
        "light-grayish-blue" : "hsl(236, 33%, 92%)", //hover
        "dark-grayish-blue": "hsl(234, 11%, 52%)",
        "very-dark-grayish-blue": "hsl(233, 14%, 35%)",
        "veryy-dark-grayish-blue": "hsl(237, 14%, 26%)",
        "firebrick": "firebrick",
        'faint-black': 'rgba(96, 98, 104, 1)',
      },
      backgroundImage: {
        'dark-hero-dt':"url('../public/img/bg-desktop-dark.jpg')",
        'light-hero-dt':"url('../public/img/bg-desktop-light.jpg')",
        'dark-hero-mb':"url('../public/img/bg-mobile-dark.jpg')",
        'light-hero-mb':"url('../public/img/bg-mobile-light.jpg')",
      },
      screens: {
        'ds': '1440px',
      },
      fontFamily: {
        "josefin-sans": ["Josefin Sans", "sans-serif"],
      },
      height: {
        "88": "22rem",
        "98" : "30rem",
        "100": "38rem"
      },
      letterSpacing: {
        'overwide': '0.4em'
      }
    },
  },
  plugins: [],
}

