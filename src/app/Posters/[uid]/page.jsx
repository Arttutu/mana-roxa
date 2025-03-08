import React from "react"
import { createClient } from "@prismicio/client"
import { PrismicImage, PrismicRichText } from "@prismicio/react"
import { asText } from "@prismicio/client" // Certifique-se de importar isso
import Indice from "../../Componentes/Indice/index"
import Conteudo from "../../Componentes/Conteudo/index"
export default async function Poster({ params }) {
  const client = createClient("mana-roxa", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })
  const post = await client.getByUID("post", params.uid)

  return (
    <section className="flex w-full justify-center gap-4 px-4 sm:px-0 ">
      <div className="flex flex-col items-start justify-start gap-8  py-4 md:py-16 w-full sm:w-2/3">
        <h1 className=" text-2xl md:text-4xl text-left font-bold font-title text-destaque uppercase ">
          {asText(post.data.titulo)}
        </h1>
        <div className=" w-full ">
          <PrismicImage
            field={post.data.banner}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="text-md sm:text-lg leading-6 text-left text-textoPrincipal font-text">
          <PrismicRichText field={post.data.descricao} />
        </div>
        <div className="flex w-full gap-12 ">
          <div className="flex flex-col gap-4 w-full sm:w-1/2 md:w-3/4">
            <Conteudo post={post} />
          </div>
          <Indice post={post} />
        </div>
      </div>
    </section>
  )
}
