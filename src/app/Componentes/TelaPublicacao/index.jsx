import React from "react"
import Link from "next/link"
import Card from "../CardPoster/index.jsx"

export default function TelaPublicacao({ publicacao }) {
  return (
    <>
      {publicacao.map((item, index) => (
        <div className="bg-background2 rounded-lg flex flex-col" key={index}>
          <Card
            img={item.imagem1}
            postTitulo={item.titulo}
            tempo={item.tempo}
            data={item.data}
            resumo={item.texto}
            autor={item.autor}
          />
        </div>
      ))}
    </>
  )
}
