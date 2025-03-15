import React from "react"
import Menu from "../../Componentes/menu"
import Rodape from "../../Componentes/Rodape"
import VoltarInicio from "../../Componentes/UI/VoltarInicio"
export default function BlogLayout({ children }) {
  return (
    <>
      <Menu />
      <main className=" py-16">{children}</main>
      <VoltarInicio />
      <Rodape />
    </>
  )
}
