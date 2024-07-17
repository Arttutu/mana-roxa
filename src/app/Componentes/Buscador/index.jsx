import React from "react"

export default function Buscador() {
  return (
    <form className="flex gap-4" action="/" method="GET">
      <input
        type="text"
        name="q"
        placeholder="Digite para pesquisar..."
        className=" w-[200px] sm:w-[500px] md:w-[800px] p-[2px]  text-textoPrincipal focus:border-1  bg-background2  outline-none placeholder:text-botao "
      />
      <button
        type="submit"
        className="text-botaoTexto font-bold bg-botao rounded-lg p-2"
      >
        Buscar
      </button>
    </form>
  )
}
