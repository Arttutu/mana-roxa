import React from "react"
import Image from "next/image"
import ItemPost from "../../Componentes/ItemPost/index.jsx"
import looger from "../../../logger.js"
import db from "../../../../prisma/db.js"
import { redirect } from "next/navigation.js"
import ListaDeComentarios from "../../Componentes/ListaDeComentarios/index.jsx"
import VejaMais from "../../../../src/app/Componentes/VejaMais/index"
async function getPost(slug) {
  try {
    const post = await db.post.findFirst({
      where: {
        slug, // slug do post que passamos como parâmetro na URL
      },
      include: {
        author: true,
        comentarios: {
          include: {
            author: true,
            filhos: {
              include: {
                author: true,
              },
            },
          },
          where: {
            paiId: null,
          },
        },
      },
    })

    if (!post) {
      throw new Error(`Post ${slug} não foi encontrado`)
    }

    return post
  } catch (error) {
    looger.error("Falha ao obter a publicação com o slug:", { slug, error })
    redirect("/not-found")
  }
}

async function getAllPosts(excludeSlug) {
  try {
    const posts = await db.post.findMany({
      where: { slug: { not: excludeSlug } },
    })

    return posts
  } catch (error) {
    looger.error("Falha ao obter todos os posts:", { error })
    return []
  }
}

export default async function Poster({ params }) {
  const post = await getPost(params.slug)
  const allPosts = await getAllPosts(params.slug)

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-start gap-8">
        {post.imagem && (
          <div className="flex items-center bg-background2 w-full justify-center py-12">
            <Image
              className="rounded-xl"
              alt="imagem de numero 1 do poster"
              src={post.imagem}
              width={800}
              height={0}
              priority
            />
          </div>
        )}
        {post.titulo && (
          <h1 className="text-textoPrincipal text-xl sm:text-4xl ">
            {post.titulo}
          </h1>
        )}
        {post.texto && (
          <p className="text-md sm:text-xl text-paragrafo font-font2">
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
        <section className="flex flex-col gap-8">
          <h2 className="text-destaque font-bold text-xl sm:text-4xl ">
            Veja Mais
          </h2>
          <div className=" flex items-center gap-8 flex-wrap">
            {allPosts.map((post) => (
              <VejaMais
                key={post.slug}
                slug={post.slug}
                titulo={post.titulo}
                imagem={post.imagem}
              />
            ))}
          </div>
        </section>
        <section className="bg-backgroundComentario w-full p-4 rounded-lg flex flex-col gap-8 mt-12">
          <h2 className="text-destaque text-xl sm:text-4xl ">Comentários</h2>
          <ListaDeComentarios comentarios={post.comentarios} />
        </section>
      </div>
    </section>
  )
}
