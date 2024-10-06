/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
      // 'sm': '640px'
      'media560': '560px',
      'media1200':'1200px',
      'media440':'440px',

    },
    backgroundImage: {
      'testemonial-sec': "url('./images/miguel-a-amutio-QDv-uBc-poY-unsplash.png')",
    }
  },
  plugins: [],
}

}