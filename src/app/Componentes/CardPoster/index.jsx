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
}) {
  const descricao = typeof resumo === "string" ? resumo.slice(0, 150) : ""
  return (
    <article className="w-full sm:w-[450px] sm:h-[600px] rounded-lg  flex flex-col justify-between  ">
      <header>
        <figure>
          <Image
            width={450}
            height={0}
            src={img}
            alt={`Imagem do poster de titulo ${postTitulo}`}
          />
        </figure>
      </header>
      <section className="flex p-4  gap-4 items-center ">
        <span className="text-textoPrincipal  text-xs sm:text-md  font-font2">
          {data}
        </span>
        <span className="text-textoPrincipal  text-xs sm:text-md  font-font2">
          {tempo}min
        </span>
      </section>
      <section className="w-full flex flex-col gap-4 p-4  ">
        <h2 className="text-titulo text-xl font-bold font-font1 ">
          {postTitulo}
        </h2>
        <p className="text-textoPrincipal text-sm sm:text-lg font-bold font-font2 w-full flex flex-wrap leading-6">
          {descricao}...
        </p>
      </section>
      <footer className="flex justify-around gap-8 items-center">
        <Link href={`/Posters/${slug}`}>
          <button className="bg-botao text-botaoTexto w-[100px] p-2 m-8 rounded-md shadow-sm shadow-botao">
            Ler Mais
          </button>
        </Link>
        <Avatar autor={autor} />
      </footer>
    </article>
  )
}
