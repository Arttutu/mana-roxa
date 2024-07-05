import React from "react"
import TelaPublicacao from "./Componentes/TelaPublicacao/index.jsx"
import { publicacao } from "./data/constates/publicacao.ts"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="justify-center flex gap-12 w-full flex-wrap">
        <TelaPublicacao publicacao={publicacao} />
      </section>
    </main>
  )
}
