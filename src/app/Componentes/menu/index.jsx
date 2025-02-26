import Link from "next/link"
import Menuitem from "../MenuItem"

import { MdFeed, MdLogin, MdExitToApp } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { GiHamburgerMenu } from "react-icons/gi"
import Buscador from "../Buscador"

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
      <Buscador />
      <nav>
        <ul className="flex   sm:flex sm:flex-row gap-4    items-center">
          <Menuitem nome="FEED" endereco="/" Icon={MdFeed} />
          <Menuitem nome="PERFIL " endereco="/profile" Icon={CgProfile} />
          <Menuitem
            nome="SAIR"
            endereco="/api/auth/signout"
            Icon={MdExitToApp}
          />
        </ul>
        <GiHamburgerMenu className=" hidden sm:hidden text-textoPrincipal text-xl sm:text-2xl" />
      </nav>
    </header>
  )
}
