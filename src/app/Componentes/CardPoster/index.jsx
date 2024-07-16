import React from "react"
import Image from "next/image"
import Link from "next/link"
import Avatar from "../Avatar/index.jsx"
import ModalComentario from "../ModalComentario/index"
import DalikeBotao from "./DalikeBotao.jsx"
import { DaLike } from "../../../actions/index.jsx"
export default function Card({
  img,
  postTitulo,
  tempo,
  data,
  resumo,
  autor,
  slug,
  avatar,
  likes,
  post,
  comentarios,
}) {
  const EnviarLike = DaLike.bind(null, post)
  const descricao = typeof resumo === "string" ? resumo.slice(0, 150) : ""
  return (
    <article className="bg-background2 w-full sm:w-[450px] sm:h-[650px] rounded-lg  flex flex-col justify-between  ">
      <header>
        <figure className=" w-full rounded-lg sm:w-[450px]  flex items-center justify-center">
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
          className=" flex items-center justify-start w-full text-botao underline font-bold text-lg  hover:text-textoPrincipal transition-all  "
        >
          Ler mais
        </Link>
      </section>
      <footer className="flex flex-row  justify-between p-4">
        <div className="flex items-start gap-4">
          <form
            //chama a a action
            action={EnviarLike}
            className="flex flex-col gap-2 items-center"
          >
            <DalikeBotao />
            <p className="text-paragrafo text-md">{likes}</p>
          </form>
          <div className="flex flex-col gap-2 items-center">
            <ModalComentario post={post} />
            <p className="text-paragrafo text-md">{comentarios.length}</p>
          </div>
        </div>

        <Avatar autor={autor} avatar={avatar} />
      </footer>
    </article>
  )
}
