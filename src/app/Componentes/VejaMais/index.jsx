import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function VejaMais({ imagem, slug, titulo }) {
  return (
    <div className=" flex flex-col items-start gap-2q h-[350px] justify-between ">
      <h1 className="text-md text-textoPrincipal w-[300px]">{titulo}</h1>
      <Image
        src={imagem}
        alt={`imagem do post ${titulo}`}
        width={300}
        height={300}
        className="rounded-lg w-full sm:w-[300px] sm:h-[180px]"
      ></Image>
      <Link
        className="text-textoPrincipal text-md bg-destaque p-2  rounded-lg  hover:rounded-full transition-all"
        href={`/Posters/${slug}`}
      >
        Ler Mais
      </Link>
    </div>
  )
}
