import "./globals.css"
import { Exo_2 } from "next/font/google"
import Menu from "./Componentes/menu"
import Rodape from "./Componentes/Rodape"

const font = Exo_2({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={font.className}>
      <body className="w-full flex flex-col  sm:flex sm:flex-col  bg-background">
        <Menu />
        <div className="w-full flex flex-col">
          <main className=" flex flex-grow container h-vh mx-auto px-4 py-16">
            {children}
          </main>
          <Rodape />
        </div>
      </body>
    </html>
  )
}
