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
      container: {
        center: true, // Centraliza o container
        padding: "1rem", // Adiciona padding padrão
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px", // Aumentei o valor padrão para 1536px
          "3xl": "1800px", // Adicionei um novo breakpoint maior
        },
      },
      colors: {
        backgroundCategoria: "#ffffff",
        backgroundConteudo: "#ffffff",
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
  },
  plugins: [],
}
