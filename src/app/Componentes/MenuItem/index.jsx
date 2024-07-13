import Link from "next/link"
import React from "react"

export default function Menuitem({ endereco, nome, Icon }) {
  return (
    <Link href={endereco}>
      <div className="flex flex-col sm:flex sm:flex-row items-center gap-2">
        {Icon && (
          <Icon className="text-xl sm:text-2xl text-textoPrincipal  hover:text-hover" />
        )}
        <span className="text-paragrafo hover:underline text-lg sm:text-2xl hover:text-hover transition-all font-font">
          {nome}
        </span>
      </div>
    </Link>
  )
}
