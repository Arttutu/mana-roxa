import Image from "next/image"
import Link from "next/link"
import React from "react"
import logo from "../../../../../public/assets/img/logo.png"
export default function Logo() {
  return (
    <Link href="/" className="flex items-center flex-row gap-4">
      <div className="flex items-center gap-2">
        <Image alt="Logo do site" src={logo} width={32} />
        <span className="text-xl sm:text-3xl flex text-center font-title font-bold  text-textoPrincipal">
          Mana
          <span className="text-icone mx-2 text-xl sm:text-3xl font-title font-bold ">
            Roxa
          </span>
        </span>
      </div>
    </Link>
  )
}
