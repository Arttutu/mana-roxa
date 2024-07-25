import React from "react"
import Menu from "../Componentes/menu"
import Buscador from "../Componentes/Buscador"
import Rodape from "../Componentes/Rodape"

export default function BlogLayout({ children }) {
  return (
    <>
      <Menu />
      <main className="flex-grow container mx-auto h-auto py-12 px-4  ">
        <div className="flex flex-col  flex-grow ">
          <div className="flex pb-12  justify-center">
            <Buscador />
          </div>
          {children}
        </div>
      </main>
      <Rodape />
    </>
  )
}
