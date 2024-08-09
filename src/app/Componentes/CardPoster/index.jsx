import React from "react"
import Image from "next/image"
import Link from "next/link"
import Avatar from "../Avatar/index.jsx"
import ModalComentario from "../ModalComentario/index"
import DalikeBotao from "./DalikeBotao.jsx"
import { DaLike } from "../../../actions/index.jsx"
import { FaRegClock } from "react-icons/fa"
import { motion } from "framer-motion"
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
    <article className="bg-background h-[600px] w-full  sm:w-[450px] rounded-lg  flex flex-col justify-between   ">
      <header>
        <Link
          href={`/Posters/${slug}`}
          className=" flex items-center justify-start w-full text-botao underline font-bold text-lg  hover:text-textoPrincipal transition-all  "
        >
          <motion.figure
            className=" w-full rounded-lg sm:w-[450px]  flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 0.9 }}
          >
            <Image
              width={450}
              height={0}
              src={img}
              className="rounded-lg object-cover  "
              alt={`Imagem do poster de titulo ${postTitulo}`}
            />
          </motion.figure>
        </Link>
      </header>
      <section className="flex f py-4  gap-2 items-center ">
        <span className="text-textoPrincipal  text-xs sm:text-md  ">
          {data}
        </span>

        <span className="text-textoPrincipal flex gap-1 justify-center items-center  text-xs sm:text-md  ">
          <FaRegClock className="text-textoPrincipal text-xs sm:text-md  " />
          Leitura {tempo} min
        </span>
      </section>
      <section className="w-full flex flex-col gap-2  py-6  ">
        <h2 className="text-titulo text-xl font-bold ">{postTitulo}</h2>
        <p className="text-paragrafo text-sm sm:text-lg   w-full flex flex-wrap leading-6">
          {descricao}...
        </p>
        <Link
          href={`/Posters/${slug}`}
          className=" flex items-center justify-start w-full text-botao underline font-bold text-lg  hover:text-textoPrincipal transition-all  "
        >
          Continuar Lendo
        </Link>
      </section>
      <footer className="bg-background2  rounded-lg flex flex-row items-center justify-between p-4">
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
