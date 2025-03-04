import React from "react"
import Menu from "../../Componentes/menu"
import Rodape from "../../Componentes/Rodape"

export default function BlogLayout({ children }) {
  return (
    <>
      <Menu />
      <main className=" flex-grow container  md:mx-auto h-auto py-16">
        <div className="flex flex-col w-full ">{children}</div>
      </main>
      <Rodape />
    </>
  )
}
