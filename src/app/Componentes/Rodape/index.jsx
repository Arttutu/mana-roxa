import React from "react"
import Logo from "../UI/Logo"

export default function Rodape() {
  return (
    <footer className=" bg-background2 p-6   w-full ">
      <div className="container mx-auto sm:flex sm:flex-row flex flex-col gap-4 items-center justify-around">
        <span className="text-textoPrincipal flex items-center gap-4 text-md sm:text-lg">
          Copyright © <Logo /> Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
