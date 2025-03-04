"use client"

import { PrismicRichText } from "@prismicio/react"
const Conteudo = ({ post }) => {
  return post.data.conteudo.map((item, index) => (
    <div key={index}>
      <div className=" text-xl sm:text-2xl pb-4 text-left text-destaque ">
        <PrismicRichText field={item.titulo} />
      </div>
      <div className="text-md leading-10 sm:text-xl text-left   text-textoPrincipal ">
        <PrismicRichText field={item.descricao} />
      </div>
    </div>
  ))
}

export default Conteudo
