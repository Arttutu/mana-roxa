import React from "react"
import Image from "next/image"
import avatarPadrao from "./avatarPadrao.jpg"
export default function Comentario({ comentario }) {
  const imgSrc =
    comentario.author.avatar ?? comentario.author.image ?? avatarPadrao
  const autorName = comentario.author.userautor ?? comentario.author.name
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex gap-2 items-center">
        {imgSrc && (
          <Image
            src={imgSrc}
            height={32}
            width={32}
            priority
            alt={`Avatar do(a) ${comentario.author.userautor}`}
            className="bg-backgroundComentario rounded-xl"
          />
        )}
        <strong>@{autorName}</strong>
        <p>{comentario.Texto}</p>
      </div>
    </div>
  )
}
