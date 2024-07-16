import React from "react"
import Comentario from "../Comentario"
import ModalResposta from "../ModalResposta"
import Resposta from "../Resposta"

export default function ListaDeComentarios({ comentarios }) {
  return (
    <ul className="flex flex-col gap-8">
      {comentarios.map((comentario) => (
        <li key={comentario.id}>
          <Comentario comentario={comentario} />
          <ModalResposta pai={comentario.pai} />
          <Resposta comentario={comentario} />
        </li>
      ))}
    </ul>
  )
}
