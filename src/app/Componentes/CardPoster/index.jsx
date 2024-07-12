import React from "react"
import Image from "next/image"
import Link from "next/link"
import Avatar from "../Avatar/index.jsx"
export default function Card({
  img,
  postTitulo,
  tempo,
  data,
  resumo,
  autor,
  slug,
  avatar,
}) {
  const descricao = typeof resumo === "string" ? resumo.slice(0, 150) : ""
  return (
    <article className="bg-background2 w-full sm:w-[450px] sm:h-[650px] rounded-lg  flex flex-col justify-between  ">
      <header>
        <figure className="bg-textoPrincipal w-full rounded-lg sm:w-[450px] flex items-center justify-center">
          <Image
            width={500}
            height={0}
            src={img}
            alt={`Imagem do poster de titulo ${postTitulo}`}
          />
        </figure>
      </header>
      <section className="flex p-4  gap-2 items-center ">
        <span className="text-textoPrincipal  text-xs sm:text-md  font-font2">
          {data}
        </span>
        <span className="text-textoPrincipal  text-xs sm:text-md  font-font2">
          Leitura {tempo} min
        </span>
      </section>
      <section className="w-full flex flex-col gap-2 p-4  ">
        <h2 className="text-titulo text-xl font-bold font-font1 ">
          {postTitulo}
        </h2>
        <p className="text-paragrafo text-sm sm:text-lg  font-font2 w-full flex flex-wrap leading-6">
          {descricao}...
        </p>
        <Link
          href={`/Posters/${slug}`}
          className=" flex items-center justify-center w-24 text-botao underline font-bold text-lg rounded-lg p-[2px] "
        >
          Ler mais
        </Link>
      </section>
      <footer className="flex flex-row  justify-end p-4">
        <Avatar autor={autor} avatar={avatar} />
      </footer>
    </article>
  )
}
