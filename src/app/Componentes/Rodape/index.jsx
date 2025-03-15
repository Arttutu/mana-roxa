import React from "react"
import Logo from "../UI/Logo"
import Autor from "../Autor"
import Link from "next/link"

export default function Rodape() {
  return (
    <footer className=" bg-background2 p-6   w-full ">
      <div className="container mx-auto sm:flex sm:flex-row flex flex-col gap-4 items-center justify-around">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="font-text">Mana Roxa o seu blog favorito para jogos</p>
          <Link href={"https://www.linkedin.com/in/santos-gomes/"}>
            <Autor />
          </Link>
        </div>

        <span className="text-textoPrincipal font-text flex items-center gap-4 text-md sm:text-lg">
          Copyright © Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
