/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      background: "#16161a",
      background2:"#242629",
      textoPrincipal: "#fffffe",
      paragrafo: "#94a1b2",
      botao:"#7f5af0",
      hover:"#7f5af0",
      botaoTexto:"#fffffe"
    },
    extend: {
      fontFamily: {
        font1: "spicy-rice-regula",
        font2: "source-sans-3"
      },
    }
    
  
  },
  plugins: [],
}
