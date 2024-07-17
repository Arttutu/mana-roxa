"use client"
import React, { useEffect, useState } from "react"
import Comentario from "../Comentario"
import ModalResposta from "../ModalResposta"

export default function Resposta({ comentario }) {
  const [showResposta, setShowResposta] = useState(false)

  return (
    <div className="flex flex-col gap-2 items-start">
      <button
        onClick={() => setShowResposta(!showResposta)}
        className="text-sm font-bold hover:text-hover"
      >
        {showResposta ? "---Ocultar" : "---Ver"}
      </button>
      {showResposta && (
        <ul className="flex flex-col gap-4 px-4 py-8">
          {comentario.filhos.map((respostas) => (
            <li key={respostas.id} className="flex flex-col items-start gap-4">
              <Comentario comentario={respostas} />
              <ModalResposta comentario={respostas} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
