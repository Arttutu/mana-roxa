
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import {Exo_2 } from 'next/font/google'
import Logo from "../../public/assets/img/logo.png"
// If loading a variable font, you don't need to specify the font weight
const font = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

export default function RootLayout({children}) {
  return (
    <html lang="pt-br" className={font.className}  >
      <body className=" w-full bg-background">
        <header className=" bg-background2 w-full flex flex-col items-center gap-4  sm:flex sm:flex-row justify-around  p-8">
          <Link href="/" className="font-bold text-xl sm:text-4xl text-textoPrincipal   hover:text-hover transition-all font-font1"><h1>Cronicas do Console</h1></Link>
          <Link  href="/about" className="text-textoPrincipal text-md sm:text-2xl hover:text-hover transition-all font-font1" >  
          Sobre nós
          </Link>
       </header>
        <main className=" container mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}
