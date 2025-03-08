import Link from "next/link"
import React from "react"

export default function Menuitem({ endereco, nome }) {
  return (
    <Link href={endereco}>
      <li className="flex  flex-col sm:flex sm:flex-row items-center gap-2 transition-all duration-500 hover:bg-destaque hover:p-2 hover:rounded-lg ">
        <span className="  sm:block text-paragrafo hover:underline text-sm sm:text-l  hover:text-textoPrincipal font-text">
          {nome}
        </span>
      </li>
    </Link>
  )
}
