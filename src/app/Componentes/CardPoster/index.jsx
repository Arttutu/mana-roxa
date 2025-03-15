import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { PrismicImage, PrismicRichText } from "@prismicio/react"
import { GiCalendar } from "react-icons/gi"
import Categoria from "../Catergoria/index"

export default function CardPoster({
  banner,
  titulo,
  data,
  descricao,
  uid,
  categoria,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background2 pb-2 w-full sm:w-[380px] sm:h-[650px] rounded-lg flex justify-between drop-shadow-xl overflow-hidden flex-col gap-2 "
    >
      <header>
        <Link
          href={`/Posters/${uid}`}
          className="flex items-center justify-start w-full text-botao underline overflow-hidden font-bold text-lg hover:text-textoPrincipal transition-all"
        >
          <motion.figure
            className="w-full rounded-lg sm:w-[500px] object-cover flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <PrismicImage
              field={banner}
              className="w-full h-auto rounded-t-lg"
            />
          </motion.figure>
        </Link>
      </header>
      <div className="px-5 flex gap-3 items-center">
        <span className="text-sm font-bold  text-textoPrincipal ">
          {new Date(data).toLocaleDateString("pt-BR")}
        </span>
        <Categoria categoria={categoria} />
      </div>
      <section className="w-full flex flex-col gap-4  p-5">
        <div className="text-titulo text-xl  font-title">
          <PrismicRichText field={titulo} />
        </div>
        <div className="text-paragrafo text-sm sm:text-md font-text w-full flex flex-wrap leading-6">
          <PrismicRichText field={descricao} />
        </div>
      </section>
      <footer className="w-full flex flex-col gap-4 p-5">
        <Link
          href={`/Posters/${uid}`}
          className="flex items-center  justify-center w-full text-botaoTexto bg-destaque rounded-lg p-2  sm:w-[200px] font-bold font-text text-lg hover:text-titulo  hover:bg-background transition-all ease-out"
        >
          Ver post
        </Link>
      </footer>
    </motion.article>
  )
}
