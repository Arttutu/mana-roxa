import React from "react"
import { MdOutlineManageSearch } from "react-icons/md"
export default function Buscador() {
  return (
    <form
      className=" sm:w-[200px] flex justify-center gap-4"
      /* action="/" m */ method="GET"
    >
      <input
        type="text"
        name="q"
        placeholder="Digite para pesquisar..."
        className=" w-full sm:w-[500px] md:w-[800px] p-[2px] px-4 rounded-lg   text-textoPrincipal ring-offset-2 ring-offset-destaque ring-destaque focus-within:ring-1 bg-background  outline-none  "
      />
      <button
        type="submit"
        className="text-botaoTexto font-bold bg-botao rounded-lg p-2 flex items-center gap-1 transition-all  hover:rounded-full"
      >
        Buscar
        <MdOutlineManageSearch className="text-botaoTexto text-2xl" />
      </button>
    </form>
  )
}
