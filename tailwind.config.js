/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Orbitron"', "sans-serif"],
        text: ['"Roboto"', "sans-serif"],
        logo: ["Luckiest Guy", "regular"],
      },
    },
    colors: {
      background: "#f8f9fa",
      backgroundComentario: "#ffffff",
      background2: "#e9ecef",
      textoPrincipal: "#212529",
      paragrafo: "#495057",
      titulo: "#4c2b87",
      botao: "#6f42c1",
      destaque: "#6f42c1",
      icone: "#6f42c1",
      hover: "#563d7c",
      botaoTexto: "#ffffff",
      rodape: "#dee2e6",
      erro: "#dc3545",
    },
  },
  plugins: [],
}
