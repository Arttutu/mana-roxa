import React from "react"
import Link from "next/link"
import Menuitem from "../MenuItem"
import Image from "next/image"
import Logo from "../../../../public/assets/logo.png"

export default function Menu() {
  return (
    <header className="bg-background2 w-full items-center sm:w-[300px] fixed top-0 left-0 sm:static h-auto sm:h-[1600px] flex flex-col gap-2 p-8">
      <Link href="/">
        <Image src={Logo} height={200} width={200} alt="Logo do site" />
      </Link>
      <nav className="flex flex-col gap-2 sm:gap-8 items-center">
        <Menuitem nome="home" endereco="/" />
        <Menuitem nome="sobre nós" endereco="/about" />
      </nav>
    </header>
  )
}
