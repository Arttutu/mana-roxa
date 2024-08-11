/* "use client" */
import Link from "next/link"
import Menuitem from "../MenuItem"
import { options } from "../../api/auth/[...nextauth]/google/options"
import { MdFeed, MdLogin, MdInfo, MdExitToApp } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { GiHamburgerMenu } from "react-icons/gi"
import { getServerSession } from "next-auth"
/* import { useState } from "react" */

export default async function Menu() {
  const sessao = await getServerSession(options)
  /*   const [Open, setOpen] = useState() */
  return (
    <header className="bg-background2 flex flex-col items-center justify-center  gap-8 p-4  sm:w-full sm:flex sm:flex-row sm:justify-around sm:p-8 ">
      <Link href="/" className="flex items-center flex-row gap-4">
        <span className="text-xl sm:text-3xl flex text-center text-textoPrincipal">
          Cronicas do Console
        </span>
      </Link>
      <nav>
        <ul className="flex   sm:flex sm:flex-row gap-4    items-center">
          <Menuitem nome="feed" endereco="/" Icon={MdFeed} />
          {/*  <Menuitem disable nome="sobre nós " endereco="/" Icon={MdInfo} /> */}
          <Menuitem nome="Perfil " endereco="/profile" Icon={CgProfile} />
          {sessao ? (
            <Menuitem
              nome="Sair"
              endereco="/api/auth/signout"
              Icon={MdExitToApp}
            />
          ) : (
            <Menuitem nome="Login" endereco="/api/auth/signin" Icon={MdLogin} />
          )}
        </ul>
        <GiHamburgerMenu className=" hidden sm:hidden text-textoPrincipal text-xl sm:text-2xl" />
      </nav>
    </header>
  )
}
