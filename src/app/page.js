import React from "react"
import TelaPublicacao from "./Componentes/TelaPublicacao/index.jsx"
import { publicacao } from "./data/constates/publicacao.ts"

export default function Home() {
  return (
    <section className="justify-center flex gap-12 w-full flex-wrap">
      <TelaPublicacao publicacao={publicacao} />
    </section>
  )
}
