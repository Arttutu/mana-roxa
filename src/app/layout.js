
import Link from "next/link";
import "./globals.css";


export default function RootLayout({children}) {
  return (
    <html lang="pt-br">
      <body className="bg-background">
        <header className="flex justify-between container mx-auto p-8">
          <Link href="/" className="font-bold text-4xl text-textoPrincipal underline hover:text-hover transition-all"><h1 >Bem-vindo TechTur</h1></Link>
          <Link  href="/about" className="text-textoPrincipal text-2xl hover:text-hover transition-all" >  
          Sobre mim
          </Link>
       </header>
        <main className="container mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}
