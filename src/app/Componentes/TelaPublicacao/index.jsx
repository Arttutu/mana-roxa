"use client"
import React from "react"
import Card from "../CardPoster/index.jsx"

export default function TelaPublicacao({ post }) {
  return (
    <>
      {post.map((item) => (
        <div
          className="bg-background rounded-lg flex flex-col flex-wrap"
          key={item.id}
        >
          <Card
            img={item.imagem}
            postTitulo={item.titulo}
            tempo={item.tempoLeitura}
            data={new Date(item.data).toLocaleDateString()}
            slug={item.slug}
            resumo={item.texto}
            autor={item.author.userautor}
          />
        </div>
      ))}
    </>
  )
}
