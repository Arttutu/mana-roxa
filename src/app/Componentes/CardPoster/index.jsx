import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { PrismicImage, PrismicRichText } from "@prismicio/react"

export default function CardPoster({ banner, titulo, data, descricao, uid }) {
  return (
    <article className="bg-background2 pb-2 w-full sm:w-[400px] sm:h-[700px] rounded-lg flex overflow-hidden flex-col gap-2 ">
      <header>
        <Link
          href={`/Posters/${uid}`}
          className="flex items-center justify-start w-full text-botao underline overflow-hidden font-bold text-lg hover:text-textoPrincipal transition-all"
        >
          <motion.figure
            className="w-full rounded-lg sm:w-[450px] object-cover flex items-center justify-center cursor-pointer"
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
      <section className="flex gap-2 items-center">
        {/*  <span className="text-textoPrincipal text-xs sm:text-md">
          <PrismicRichText field={data} />
        </span> */}
      </section>
      <section className="w-full flex flex-col gap-4  p-5">
        <h2 className="text-titulo text-xl font-bold">
          <PrismicRichText field={titulo} />
        </h2>
        <div className="text-paragrafo text-sm sm:text-lg w-full flex flex-wrap leading-6">
          <PrismicRichText field={descricao} />
        </div>
      </section>
      <footer className="w-full flex flex-col gap-4 p-5">
        <Link
          href={`/Posters/${uid}`}
          className="flex items-center  justify-center w-full text-textoPrincipal bg-destaque rounded-lg p-2  sm:w-[200px] font-bold text-lg hover:text-titulo  hover:bg-background transition-all ease-out"
        >
          Continuar Lendo
        </Link>
      </footer>
    </article>
  )
}
