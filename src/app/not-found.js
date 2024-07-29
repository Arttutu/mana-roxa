import Link from "next/link"
import React from "react"

export default function NotFound() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full ">
      <h1 className="text-textoPrincipal text-center text-4xl font-bold">
        Cronicas do console
      </h1>
      <h2 className="text-textoPrincipal text-4xl font-bold">404</h2>
      <h3 className="text-botao text-4xl text-center font-bold">
        Opa! não encontrei essa localização no mapa
      </h3>
      <p className="text-lg text-paragrafo">vamos ir para outro caminho</p>
      <Link href="/" className="underline text-destaque text-lg">
        Voltar para tela inicial
      </Link>
    </div>
  )
}
