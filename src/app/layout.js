
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { Permanent_Marker } from 'next/font/google'
import Logo from "../../public/assets/img/logo.png"
// If loading a variable font, you don't need to specify the font weight
const font = Permanent_Marker({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

export default function RootLayout({children}) {
  return (
    <html lang="pt-br" >
      <body className="bg-background">
        <header className="flex flex-col items-center gap-4  sm:flex sm:flex-row justify-between container mx-auto p-8">
          <div className="flex  items-center justify-center">
            <Link href="/" className="font-bold text-4xl text-textoPrincipal   hover:text-hover transition-all font-font1"><h1>Cronicas do Console</h1></Link>
            <Image  src={Logo} width={80} height={80} />
          </div>
          <Link  href="/about" className="text-textoPrincipal text-2xl hover:text-hover transition-all font-font1" >  
          Sobre nós
          </Link>
       </header>
        <main className="container mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}
