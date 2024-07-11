import React from "react"
import Image from "next/image"
import ItemPost from "../../Componentes/ItemPost/index.jsx"
import looger from "../../../logger.js"
import db from "../../../../prisma/db.js"
async function getPost(slug) {
  try {
    const posts = await db.post.findFirst({
      //where qual post queremos pegar
      where: {
        slug, //slug do post que passamos como parametro na url
      },
      include: {
        author: true,
      },
    })

    return posts
  } catch (error) {
    looger.error("Failed to get publicacao", { error })
    return null
  }
}

export default async function Poster({ params }) {
  console.log("esse é o slug" + params.slug)
  const post = await getPost(params.slug)
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-start gap-8">
        {post.imagem && (
          <div className="flex items-center w-full justify-center py-12">
            <Image
              className="rounded-xl"
              alt="imagem de numero 1 do poster"
              src={post.imagem}
              width={800}
              height={500}
            />
          </div>
        )}
        {post.titulo && (
          <h1 className="text-textoPrincipal text-xl sm:text-3xl font-font1">
            {post.titulo}
          </h1>
        )}
        {post.texto && (
          <p className="text-md sm:text-2xl text-paragrafo font-font2">
            {post.texto}
          </p>
        )}
        {post.video && (
          <div className="mx-auto flex items-center justify-center">
            <iframe
              width="800"
              height="500"
              src={post.video}
              className=" w-[300px] h-[200px] sm:w-[800px] sm:h-[500px]"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {[...Array(6)].map((_, i) => (
          <ItemPost
            key={i}
            posterData={post}
            imagem={post[`imagem${i + 2}`]}
            texto={post[`texto${i + 2}`]}
            titulo={post[`titulo${i + 2}`]}
          />
        ))}
      </div>
    </section>
  )
}
