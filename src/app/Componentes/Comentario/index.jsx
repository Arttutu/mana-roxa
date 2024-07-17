import React from "react"
import Image from "next/image"

export default function Comentario({ comentario }) {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex gap-2 items-center">
        <Image
          src={comentario.author.avatar}
          height={32}
          width={32}
          priority
          alt={`Avatar do(a) ${comentario.author.userautor}`}
          className="bg-backgroundComentario rounded-xl"
        />
        <strong>@{comentario.author.userautor}</strong>
        <p>{comentario.Texto}</p>
      </div>
    </div>
  )
}
