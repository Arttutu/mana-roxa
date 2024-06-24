
import Link from "next/link";
import "./globals.css";
import {Exo_2 } from 'next/font/google'

const font = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

export default function RootLayout({children}) {
  return (
    <html lang="pt-br" className={font.className}  >
      <body className=" w-full bg-background">
        <header className=" bg-background2 w-full flex flex-col sm:flex sm:flex-row items-center justify-around  gap-4   p-8">
          <Link href="/" className="font-bold text-xl sm:text-4xl text-textoPrincipal   hover:text-hover transition-all font-font1"><h1>Cronicas do Console</h1></Link>
          <nav className="flex flex-col sm:flex sm:flex-row sm:gap-8 items-center ">
            <Link  href="/" className="text-textoPrincipal text-md sm:text-2xl hover:text-hover transition-all font-font1" >  
              Home
            </Link>  
            <Link  href="/about" className="text-textoPrincipal text-md sm:text-2xl hover:text-hover transition-all font-font1" >  
            Sobre nós
            </Link>
           
          </nav>
        
       </header>
        <main className=" container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
