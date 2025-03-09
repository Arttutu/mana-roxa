import React from "react"
import Menu from "../../Componentes/menu"
import Rodape from "../../Componentes/Rodape"

export default function BlogLayout({ children }) {
  return (
    <>
      <Menu />
      <main className="w-full md:container  md:mx-auto  h-auto py-16">
        <div className="flex flex-col w-full ">{children}</div>
      </main>
      <Rodape />
    </>
  )
}
