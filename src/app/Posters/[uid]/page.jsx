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
    <section className="flex justify-between ">
      <div className="flex flex-col items-start justify-start gap-8 py-16  w-2/3">
        <h1 className="text-2xl text-left text-destaque uppercase ">
          {asText(post.data.titulo)}
        </h1>
        <div className=" w-full sm:w-[400px] md:w-2/3">
          <PrismicImage field={post.data.banner} className="w-full h-auto" />
        </div>
        <div className="text-md sm:text-xl text-left text-textoPrincipal">
          <PrismicRichText field={post.data.descricao} />
        </div>
        <Conteudo post={post} />
      </div>
      <div className="py-16 ">
        <Indice post={post} />
      </div>
    </section>
  )
}
