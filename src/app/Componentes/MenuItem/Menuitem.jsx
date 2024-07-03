import Link from "next/link"
import React from "react"

export default function Menuitem({ endereco, nome }) {
  return (
    <Link href={endereco}>
      <span className="text-textoPrincipal text-md sm:text-2xl hover:text-hover transition-all font-font">
        {nome}
      </span>
    </Link>
  )
}
