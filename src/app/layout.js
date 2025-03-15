import "./globals.css"
import SubirCima from "../app/Componentes/UI/subirCima"
export const metadata = {
  title: "Mana roxa - Blog de Análises e Notícias sobre Games e Consoles",
  description:
    "Acompanhe as últimas notícias e análises detalhadas de jogos e consoles no Crônicas do Console. Mantenha-se atualizado com reviews e informações relevantes sobre o universo gamer.",
  keywords:
    "notícias de jogos, análises de consoles, reviews de games, novidades sobre consoles, blog gamer, atualizações do mundo dos games",
  icons: {
    icon: "/assets/img/logo.png",
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9774681383780198"
          crossOrigin="anonymous"
        />
      </head>
      <body className="w-full flex flex-col justify-center min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
