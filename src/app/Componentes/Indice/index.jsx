"use client"
import { asText } from "@prismicio/client"
import { useEffect, useState } from "react"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
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
    <div className=" w-96 h-fit   rounded-x hidden rounded-lg md:block  bg-backgroundComentario p-8">
      <h1 className="flex gap-2 items-center uppercase text-md  text-destaque font-bold">
        Índice
      </h1>
      <div className="bg-colors-background2 dark:bg-colors-backgroundClar2 h-[1px] mt-4 w-full"></div>
      <ul className="p-4 flex flex-col gap-2  list-none">
        {post.data.conteudo.map((item, index) => (
          <Link
            key={index}
            href={`#${asText(item.titulo)}`}
            className={`flex gap-4 items-center justify-start  text-md hover:text-destaque duration-200 transition-all 
              ${hash === `#${asText(item.titulo)}` ? "text-colors-destaque font-bold" : "dark:text-colors-paragrafo list-disc text-colors-paragrafo2"}`}
          >
            {asText(item.titulo) === "" ? "" : <li>{asText(item.titulo)}</li>}
          </Link>
        ))}
      </ul>
    </div>
  )
}
