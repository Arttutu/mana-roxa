import Link from "next/link"
import React from "react"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center flex-row gap-4">
      <span className="text-xl sm:text-3xl flex text-center text-textoPrincipal">
        Mana
        <span className="text-icone mx-2 text-xl sm:text-3xl ">Roxa</span>
      </span>
    </Link>
  )
}
