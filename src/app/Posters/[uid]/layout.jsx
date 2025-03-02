import React from "react"
import Menu from "../../Componentes/menu"
import Rodape from "../../Componentes/Rodape"

export default function BlogLayout({ children }) {
  return (
    <>
      <Menu />
      <main className="flex-grow container mx-auto h-auto     ">
        <div className="flex flex-col pb-12">{children}</div>
      </main>
      <Rodape />
    </>
  )
}
