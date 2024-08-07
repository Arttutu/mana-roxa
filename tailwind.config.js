/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#16161a",
      backgroundComentario: "#fffffe",
      background2: "#242629",
      textoPrincipal: "#fffffe",
      paragrafo: "#94a1b2",
      titulo: "#7f5af0",
      botao: "#7f5af0",
      destaque: "#7f5af0",
      icone: "#7f5af0",
      hover: "#7f5af0",
      botaoTexto: "#fffffe",
      rodape: "#010101",
      erro: "#ff0000",
    },
  },
  /*   theme: {
    colors: {
      background: "#f9f4ef",
      background2: "#eaddcf",
      textoPrincipal: "#020826",
      paragrafo: "#716040",
      titulo: "#020826",
      botao: "#8c7851",
      icone: "#020826",
      hover: "#020826",
      botaoTexto: "#fffffe",
      rodape: "#010101",
    },
  }, */

  plugins: [],
}
