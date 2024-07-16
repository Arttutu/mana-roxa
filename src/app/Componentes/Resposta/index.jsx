import React from "react"
import Comentario from "../Comentario"

export default function Resposta({ comentario }) {
  return (
    <div className="flex flex-col gap-2 items-start">
      <ul>
        {comentario.filhos.map((resposta) => (
          <li key={resposta.id}>
            <Comentario comentario={resposta} />
          </li>
        ))}
      </ul>
    </div>
  )
}
