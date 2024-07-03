import React from "react"
import Link from "next/link"
import Menuitem from "../MenuItem/Menuitem"
export default function Menu() {
  return (
    <header className=" bg-background2 w-full flex flex-col sm:flex sm:flex-row items-center justify-around  gap-4   p-8">
      <Link href="/">
        <span className="font-bold text-xl sm:text-4xl text-textoPrincipal   hover:text-hover transition-all font-font1">
          Cronicas do Console
        </span>
      </Link>
      <nav className="flex flex-col gap-2 sm:flex sm:flex-row sm:gap-8 items-center ">
        <Menuitem nome="home" endereco="/" />
        <Menuitem nome="sobre nós" endereco="/about" />
      </nav>
    </header>
  )
}
