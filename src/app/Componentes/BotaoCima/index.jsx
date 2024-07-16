"use client"
import React from "react"
import { MdOutlineArrowUpward } from "react-icons/md"
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
      className="bg-botao rounded-lg p-2 w-42 text-textoPrincipal text-sm sm:text-md flex items-center gap-2"
    >
      Voltar para cima
      <MdOutlineArrowUpward className="text-textoPrincipal text-sm sm:text-md" />
    </button>
  )
}
