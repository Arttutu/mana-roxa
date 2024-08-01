"use client"
import React, { useEffect, useState } from "react"
import Comentario from "../Comentario"
import ModalResposta from "../ModalResposta"

export default function Resposta({ comentario }) {
  const [showResposta, setShowResposta] = useState(false)
  const [respostas, setRespostas] = useState([])

  async function fetchData() {
    const response = await fetch(`/api/comentarios/${comentario.id}/respostas`)
    const data = await response.json()
    setRespostas(data)
  }
  useEffect(() => {
    if (showResposta) {
      fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResposta])
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
          {respostas.map((resposta) => (
            <li key={resposta.id} className="flex flex-col items-start gap-4">
              <Comentario comentario={resposta} />
              <ModalResposta comentario={resposta} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
