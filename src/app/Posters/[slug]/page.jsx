import React from "react"
import Image from "next/image"
import ItemPost from "../../Componentes/ItemPost/index.jsx"

async function getPost(slug) {
  const url = `http://localhost:3042/Posters?slug=${slug}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await response.json()
    if (data.length === 0) {
      throw new Error("No data found")
    }

    return data[0]
  } catch (error) {
    console.error(error)
    return null // Retorna null em caso de erro
  }
}

export default async function Poster({ params }) {
  const post = await getPost(params.slug)
  console.log("Params:", params)
  if (!post) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-textoPrincipal ">
          Poster not found
        </h1>
      </section>
    )
  }

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-start gap-8">
        {post.imagem1 && (
          <div className="flex items-center w-full justify-center py-12">
            <Image
              className="rounded-xl"
              alt="imagem de numero 1 do poster"
              src={post.imagem1}
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
          <div className="w-full flex items-center justify-center">
            <iframe
              width="800"
              height="500"
              src={post.video}
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
