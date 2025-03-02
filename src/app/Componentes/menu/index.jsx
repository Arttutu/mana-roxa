import Link from "next/link"
import Buscador from "../Buscador"
import Navegacao from "../Navegacao"

/* import { useState } from "react" */

export default async function Menu() {
  return (
    <header className="bg-background2 flex flex-col items-center justify-center  gap-8 p-4  sm:w-full sm:flex sm:flex-row sm:justify-around sm:p-4 ">
      <Link href="/" className="flex items-center flex-row gap-4">
        <span className="text-xl sm:text-3xl flex text-center text-textoPrincipal">
          Mana
          <span className="text-icone mx-2 text-xl sm:text-3xl ">Roxa</span>
        </span>
      </Link>
      <div className="md:flex items-center gap-28  hidden">
        <Buscador />
        <Navegacao />
      </div>
    </header>
  )
}
