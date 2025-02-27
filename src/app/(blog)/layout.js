import React from "react"
import Menu from "../Componentes/menu"

import Rodape from "../Componentes/Rodape"

export default function BlogLayout({ children }) {
  return (
    <>
      <Menu />
      <main className="flex-grow container mx-auto h-auto  px-4   ">
        <h1 className=" text-xl sm:text-4xl text-destaque flex justify-start py-12">
          Publicações recentes
        </h1>
        <div className="flex flex-col  flex-grow pb-12 ">{children}</div>
      </main>
      <Rodape />
    </>
  )
}
