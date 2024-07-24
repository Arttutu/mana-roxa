import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function VejaMais({ imagem, slug, titulo }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-lg text-textoPrincipal">{titulo}</h1>
      <Image
        src={imagem}
        alt={`imagem do post ${titulo}`}
        width={300}
        height={500}
        className="rounded-lg"
      ></Image>
      <Link
        className="text-textoPrincipal text-md bg-destaque p-2  rounded-lg"
        href={`/Posters/${slug}`}
      >
        Ler Mais
      </Link>
    </div>
  )
}
