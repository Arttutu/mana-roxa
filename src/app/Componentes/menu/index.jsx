"use client"
import Buscador from "../Buscador"
import Navegacao from "../Navegacao"
import Logo from "../UI/Logo"
import BotaoMenu from "../UI/BotaoMenu"
import { useEffect, useState } from "react"

export default function Menu() {
  const [openMenu, setopenMenu] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setopenMenu(false)
      }
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [openMenu])
  const handleMenu = () => {
    setopenMenu(!openMenu)
  }
  return (
    <header className="fixed w-full top-0 z-10  bg-background2  gap-8 p-4 sm:w-full sm:p-4 ">
      <div className="flex  items-center  justify-between   sm:flex  sm:justify-around">
        <Logo />
        <div className="md:flex items-center gap-28  hidden">
          <Buscador />
          <Navegacao />
        </div>
        <div className="md:hidden items-center gap-28  flex">
          <BotaoMenu openMenu={openMenu} handleMenu={handleMenu} />
        </div>
      </div>
      {openMenu ? <Navegacao mobile /> : ""}
    </header>
  )
}
