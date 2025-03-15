import React from "react"

import { PrismicImage, PrismicRichText } from "@prismicio/react"
import { asText } from "@prismicio/client"
import Indice from "../../Componentes/Indice/index"
import UltimosPost from "../../Componentes/UltimosPost/index"
import Linha from "../../Componentes/UI/Linha/index"
import Conteudo from "../../Componentes/Conteudo/index"
import { lastPost } from "../../utils/last-post"
import { Client } from "../../utils/client-api"
export default async function Poster({ params }) {
  const post = await Client.getByUID("post", params.uid)
  const LastPost = await lastPost()
  return (
    <section className="flex justify-center gap-2 px-4 sm:px-0 ">
      <div className="flex flex-col items-start justify-start gap-8  py-4 md:py-16 w-full sm:w-2/3">
        <h1 className=" text-2xl md:text-4xl text-left font-bold font-title text-destaque uppercase ">
          {asText(post.data.titulo)}
        </h1>
        <Linha />
        <div className=" w-full ">
          <PrismicImage
            field={post.data.banner}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="text-md sm:text-lg leading-6 text-left text-textoPrincipal font-text">
          <PrismicRichText field={post.data.descricao} />
        </div>
        <div className="flex w-full  gap-12 bg-backgroundConteudo relative px-4 py-12 drop-shadow-xl rounded-xl ">
          <Conteudo post={post} />
          <div className=" hidden h-full  lg:sticky  lg:top-24  lg:flex lg:flex-col    gap-8">
            <Indice post={post} />
            <UltimosPost post={LastPost} />
          </div>
        </div>
      </div>
    </section>
  )
}
