import Link from "next/link"
import React from "react"

export default function NotFound() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full ">
      <h1 className="text-textoPrincipal text-4xl font-bold">404</h1>
      <h2 className="text-botao text-4xl font-bold">Opa! não encontrei nada</h2>
      <p className="text-lg text-paragrafo">
        A página que você está procurando não existe.
      </p>
    </div>
  )
}
