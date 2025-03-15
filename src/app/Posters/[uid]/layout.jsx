import React from "react"
import Menu from "../../Componentes/menu"
import Rodape from "../../Componentes/Rodape"

export default function BlogLayout({ children }) {
  return (
    <>
      <Menu />
      <main className=" py-16">{children}</main>
      <Rodape />
    </>
  )
}
