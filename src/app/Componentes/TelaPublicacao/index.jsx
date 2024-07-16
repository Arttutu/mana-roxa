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
            post={item}
            img={item.imagem}
            postTitulo={item.titulo}
            tempo={item.tempoLeitura}
            data={new Date(item.data).toLocaleDateString()}
            slug={item.slug}
            resumo={item.texto}
            avatar={item.author.avatar}
            autor={item.author.userautor}
            likes={item.likes}
            comentarios={item.comentarios}
          />
        </div>
      ))}
    </>
  )
}
