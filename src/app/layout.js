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
      <body className="w-full bg-background">
        <Menu />
        <main className="container mx-auto px-4 py-16"> {children}</main>
        <Rodape />
      </body>
    </html>
  )
}
