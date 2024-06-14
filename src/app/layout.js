
import Link from "next/link";
import "./globals.css";


export default function RootLayout({children}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&family=Spicy+Rice&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-background">
        <header className="flex justify-between container mx-auto p-8">
          <Link href="/" className="font-bold text-4xl text-textoPrincipal  hover:text-hover transition-all font-font1"><h1 >Bem-vindo TechTur</h1></Link>
          <Link  href="/about" className="text-textoPrincipal text-2xl hover:text-hover transition-all font-font1" >  
          Sobre mim
          </Link>
       </header>
        <main className="container mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}
