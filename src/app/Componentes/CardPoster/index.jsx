import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { PrismicImage, PrismicRichText } from "@prismicio/react"

export default function CardPoster({ banner, titulo, data, descricao }) {
  return (
    <article className="bg-background2  full sm:w-[400px] rounded-lg flex flex-col gap-2 justify-between">
      <header>
        <Link
          href={"/"}
          className="flex items-center justify-start w-full text-botao underline font-bold text-lg hover:text-textoPrincipal transition-all"
        >
          <motion.figure
            className="w-full rounded-lg sm:w-[450px] flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 0.9 }}
          >
            {/* Renderização do banner */}
            <PrismicImage
              field={banner}
              className="w-full h-auto rounded-t-lg"
            />
          </motion.figure>
        </Link>
      </header>
      <section className="flex gap-2 items-center">
        <span className="text-textoPrincipal text-xs sm:text-md">
          <PrismicRichText field={data} />
        </span>
      </section>
      <section className="w-full flex flex-col gap-4  p-5">
        <h2 className="text-titulo text-xl font-bold">
          <PrismicRichText field={titulo} />
        </h2>
        <div className="text-paragrafo text-sm sm:text-lg w-full flex flex-wrap leading-6">
          <PrismicRichText field={descricao} />
        </div>
        <Link
          href={`/`}
          className="flex items-center justify-center w-full text-textoPrincipal bg-destaque rounded-lg p-2  sm:w-[200px] font-bold text-lg hover:text-textoPrincipal transition-all"
        >
          Continuar Lendo
        </Link>
      </section>
    </article>
  )
}
