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
            height={42}
            width={42}
            priority
            alt={`Avatar do(a) ${
              comentario.author.userautor ?? comentario.author.name
            }`}
            className="bg-backgroundComentario rounded-full w-[42px] h-[42px] "
          />
        )}
        <strong>@{autorName}</strong>
        <p>{comentario.Texto}</p>
      </div>
    </div>
  )
}
