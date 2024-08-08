"use client"
import React from "react"
import Card from "../CardPoster/index.jsx"
import { motion } from "framer-motion"
export default function TelaPublicacao({ post }) {
  return (
    <>
      {post.map((item) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <div key={item.id}>
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
        </motion.div>
      ))}
    </>
  )
}
