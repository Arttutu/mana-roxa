import React from "react"
import { createClient } from "@prismicio/client"
import { PrismicImage, PrismicRichText, PrismicText } from "@prismicio/react"
import { asText } from "@prismicio/client" // Certifique-se de importar isso

export default async function Poster({ params }) {
  const client = createClient("mana-roxa", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })
  const post = await client.getByUID("post", params.uid)

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-start justify-start gap-8 py-16  w-2/3">
        <h1 className="text-2xl text-left text-destaque uppercase ">
          {asText(post.data.titulo)} {/* Usar asText aqui */}
        </h1>
        <div className=" w-full sm:w-[400px] md:w-2/3">
          <PrismicImage field={post.data.banner} className="w-full h-auto" />
        </div>
        <div className="text-md sm:text-xl text-left text-textoPrincipal">
          <PrismicRichText field={post.data.descricao} />
          {/* PrismicRichText funciona aqui */}
        </div>
        {post.data.conteudo.map((item, index) => (
          <div key={index}>
            <h3 className=" text-xl sm:text-2xl pb-4 text-left text-destaque ">
              <PrismicRichText field={item.titulo} />
            </h3>
            <p className="text-md leading-10 sm:text-xl text-left   text-textoPrincipal ">
              <PrismicRichText field={item.descricao} />
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
