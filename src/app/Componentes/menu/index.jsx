"use client"
import Buscador from "../Buscador"
import Navegacao from "../Navegacao"
import Logo from "../Logo"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Menu() {
  const [openMenu, setopenMenu] = useState(false)

  const handleMenu = () => {
    setopenMenu(!openMenu)
  }
  return (
    <header className="fixed w-full top-0 z-10  bg-background2 flex flex-col items-center justify-center  gap-8 p-4  sm:w-full sm:flex sm:flex-row sm:justify-around sm:p-4 ">
      <Logo />
      <div className="md:flex items-center gap-28  hidden">
        <Buscador />
        <Navegacao />
      </div>
      <div className="md:hidden items-center gap-28  flex">
        <button className="text-destaque text-4xl" onClick={handleMenu}>
          <GiHamburgerMenu className="text-destaque text-xl sm:text-2xl" />
        </button>
        {openMenu ? <Navegacao mobile /> : ""}
      </div>
    </header>
  )
}
