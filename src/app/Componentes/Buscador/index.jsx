import React from "react"

export default function Buscador() {
  return (
    <form className="flex gap-4" action="/" method="GET">
      <input
        type="text"
        name="q"
        placeholder="Digite para pesquisar"
        className=" w-full sm:w-96 rounded-lg p-[2px] outline-none placeholder:text-paragrafo placeholder:px-2"
      />
      <button
        type="submit"
        className="text-textoPrincipal font-bold bg-botao rounded-lg p-2"
      >
        Buscar
      </button>
    </form>
  )
}
