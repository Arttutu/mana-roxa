import React from "react"
import Image from "next/image"
import ItemPost from "../../../Componentes/ItemPost/index.jsx"
import looger from "../../../../logger.js"
import db from "../../../../../prisma/db.js"
import { redirect } from "next/navigation.js"
import ListaDeComentarios from "../../../Componentes/ListaDeComentarios/index.jsx"
import VejaMais from "../../../../../src/app/Componentes/VejaMais/index"
import ModalComentario from "../../../Componentes/ModalComentario/index.jsx"
import dynamic from "next/dynamic"

async function getPost(slug) {
  const ModalComentario = dynamic(
    () => import("../../../Componentes/ModalComentario/index.jsx"),
    {
      ssr: false, // Desativa a renderização no lado do servidor
    }
  )
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

  const items = []
  for (let i = 2; i <= 11; i++) {
    items.push(
      <ItemPost
        key={post[`titulo${i}`]}
        posterData={post}
        imagem={post[`imagem${i}`]}
        texto={post[`texto${i}`]}
        titulo={post[`titulo${i}`]}
      />
    )
  }

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-start gap-8">
        {post.imagem && (
          <div className="flex items-center bg-background2 w-full justify-center py-12">
            <Image
              className="rounded-xl w-auto h-auto"
              alt="imagem de numero 1 do poster"
              src={post.imagem}
              width={800}
              height={800}
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
            />
          </div>
        )}
        {items}
        <section className="flex flex-col gap-8">
          <h2 className="text-destaque text-xl sm:text-4xl ">Últimos posts</h2>
          <div className=" flex items-center gap-8 flex-wrap">
            {allPosts.slice(-3).map((post) => (
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
          <div className="flex items-end gap-4">
            <h2 className="text-destaque text-xl sm:text-4xl ">Comentários</h2>
            <ModalComentario post={post} pagina />
          </div>
          <ListaDeComentarios comentarios={post.comentarios} />
        </section>
      </div>
    </section>
  )
}
