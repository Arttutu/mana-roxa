"use client"
import React from "react"

export default function BotaoCima() {
  const subir = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona uma animação suave ao rolar
    })
  }
  return (
    <button
      onClick={subir}
      className="bg-botao rounded-full p-2 w-42 text-textoPrincipal text-md sm:text-md"
    >
      Voltar para cima
    </button>
  )
}
