import React from "react"
import { MdOutlineManageSearch } from "react-icons/md"
export default function Buscador() {
  return (
    <form className=" w-full flex justify-center gap-4" action="/" method="GET">
      <input
        type="text"
        name="q"
        placeholder="Digite para pesquisar..."
        className=" w-[200px] sm:w-[500px] md:w-[800px] p-[2px]  text-textoPrincipal focus:border-1  bg-background2  outline-none  "
      />
      <button
        type="submit"
        className="text-botaoTexto font-bold bg-botao rounded-lg p-2 flex items-center gap-1"
      >
        Buscar
        <MdOutlineManageSearch className="text-botaoTexto text-2xl" />
      </button>
    </form>
  )
}
