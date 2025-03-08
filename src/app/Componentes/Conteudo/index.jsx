"use client"

import { PrismicRichText } from "@prismicio/react"
const Conteudo = ({ post }) => {
  return post.data.conteudo.map((item, index) => (
    <div className="w-full" key={index}>
      <div className=" text-xl sm:text-xl pb-4 font-title text-left text-destaque ">
        <PrismicRichText field={item.titulo} />
      </div>
      <div className="text-md leading-6 sm:text-lg text-left font-text     text-textoPrincipal ">
        <PrismicRichText field={item.descricao} />
      </div>
    </div>
  ))
}

export default Conteudo
