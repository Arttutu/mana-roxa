import "./globals.css"
import { Exo_2, Outfit, Prompt } from "next/font/google"

const font = Exo_2({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={font.className}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9774681383780198"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className="w-full flex flex-col min-h-screen bg-background">
        {children}
      </body>
    </html>
  )
}
