import Link from "next/link"
import React from "react"

export default function Menuitem({ endereco, nome, Icon }) {
  return (
    <Link href={endereco}>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="text-md sm:text-lg text-textoPrincipal" />}
        <span className="text-textoPrincipal hover:underline text-md sm:text-2xl hover:text-hover transition-all font-font">
          {nome}
        </span>
      </div>
    </Link>
  )
}
