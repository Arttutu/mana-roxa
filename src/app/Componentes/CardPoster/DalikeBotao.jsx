"use client"
import React from "react"
import ComentarioLikeBotao from "../ComentarioLikeBotao/index.jsx"
import { AiOutlineLike } from "react-icons/ai"
import Loader from "../loader"
import { useFormStatus } from "react-dom"
export default function DalikeBotao() {
  const { pending } = useFormStatus()
  return (
    <ComentarioLikeBotao>
      {pending ? (
        <Loader />
      ) : (
        <AiOutlineLike className="text-paragrafo text-2xl" />
      )}
    </ComentarioLikeBotao>
  )
}
