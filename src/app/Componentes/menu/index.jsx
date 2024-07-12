import React from "react"
import Link from "next/link"
import Menuitem from "../MenuItem"

import { MdFeed, MdLogin, MdInfo, MdExitToApp } from "react-icons/md"

export default function Menu() {
  return (
    <header className="bg-background2 flex flex-col gap-8 p-4 justify-center items-center sm:w-full sm:flex sm:flex-row sm:justify-around sm:p-8 ">
      <Link href="/" className="flex items-center flex-row gap-4">
        <span className="text-2xl flex text-center text-textoPrincipal">
          Cronicas de um Console
        </span>
      </Link>
      <nav className="flex  sm:flex sm:flex-row gap-4    items-center">
        <Menuitem nome="feed" endereco="/" Icon={MdFeed} />
        <Menuitem nome="sobre nós " endereco="/about" Icon={MdInfo} />
      </nav>
    </header>
  )
}
