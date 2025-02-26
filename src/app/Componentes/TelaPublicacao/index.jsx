"use client"
import React from "react"
import { motion } from "framer-motion"
import CardPoster from "../CardPoster/index.jsx"

export default function TelaPublicacao({ post }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        key={post.data.uid}
      >
        <CardPoster
          banner={post.data.banner}
          titulo={post.data.titulo}
          data={post.data.data}
          descricao={post.data.descricao}
        />
      </motion.div>
    </div>
  )
}
