import React from "react"
import Link from "next/link"
import Menuitem from "../MenuItem"
import { options } from "../../api/auth/[...nextauth]/options"
import { MdFeed, MdLogin, MdInfo, MdExitToApp } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { getServerSession } from "next-auth"

export default async function Menu() {
  const sessao = await getServerSession(options)
  return (
    <header className="bg-background2 flex flex-col gap-8 p-4 justify-center items-center sm:w-full sm:flex sm:flex-row sm:justify-around sm:p-8 ">
      <Link href="/" className="flex items-center flex-row gap-4">
        <span className="text-2xl sm:text-3xl flex text-center text-textoPrincipal">
          Cronicas do Console
        </span>
      </Link>
      <nav>
        <ul className="flex  sm:flex sm:flex-row gap-4    items-center">
          <Menuitem nome="feed" endereco="/" Icon={MdFeed} />
          <Menuitem nome="sobre nós " endereco="/about" Icon={MdInfo} />
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
      </nav>
    </header>
  )
}
