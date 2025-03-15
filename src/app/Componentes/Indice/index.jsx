"use client"
import { asText } from "@prismicio/client"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function Indice({ post }) {
  const [hash, setHash] = useState("")
  useEffect(() => {
    // Captura o hash quando a página carrega
    setHash(window.location.hash)

    // Escuta mudanças no hash da URL
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <div className=" sticky  top-24  h-fit   rounded-x hidden rounded-lg lg:block  bg-backgroundComentario ">
      <h2 className="flex gap-2 items-center uppercase text-md  text-destaque font-title">
        Índice
      </h2>
      <div className="bg-colors-background2 dark:bg-colors-backgroundClar2 h-[1px] mt-4 w-full"></div>
      <ul className=" flex flex-col gap-2">
        {post.data.conteudo.map((item, index) => (
          <li className="list-none text-textoPrincipal text-sm font-text">
            {asText(item.titulo)}
          </li>
        ))}
      </ul>
    </div>
  )
}
