import Link from "next/link"
import React from "react"

export default function Menuitem({ endereco, nome, Icon }) {
  return (
    <Link href={endereco}>
      <li className="flex flex-col sm:flex sm:flex-row items-center gap-2 ">
        {Icon && (
          <Icon className="text-2xl sm:text-2xl text-textoPrincipal  hover:text-hover" />
        )}
        <span className="  sm:block text-paragrafo hover:underline text-md sm:text-xl hover:text-hover transition-all font-font">
          {nome}
        </span>
      </li>
    </Link>
  )
}
