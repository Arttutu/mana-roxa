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
      className="bg-botao rounded-lg transition-all hover:rounded-full p-2 w-42 text-textoPrincipal text-sm sm:text-md gap-2 fixed bottom-10 right-4"
    >
      <MdOutlineArrowUpward className="text-textoPrincipal text-lg sm:text-2xl" />
    </button>
  )
}
