import React from "react"
import Menu from "../Componentes/menu"
import Rodape from "../Componentes/Rodape"
import Linha from "../Componentes/UI/Linha"

export default function BlogLayout({ children }) {
  return (
    <>
      <Menu />
      <main className="flex-grow w-full container mx-auto h-auto px-4 py-16">
        {/* Centraliza o título e a linha */}
        <div className="flex flex-col items-start px-0 sm:px-24 justify-start gap-4 py-12">
          <h1 className="text-2xl sm:text-4xl text-destaque font-title text-center">
            Nosso blog
          </h1>
          <Linha />
        </div>

        <div className="flex flex-col items-center justify-center pb-12">
          {children}
        </div>
      </main>
      <Rodape />
    </>
  )
}
