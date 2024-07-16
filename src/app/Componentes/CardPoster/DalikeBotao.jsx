"use client"
import React from "react"
import ComentarioLikeBotao from "../LikeBotao/index.jsx"
import { AiOutlineLike } from "react-icons/ai"
import Loader from "../loader"
import { useFormStatus } from "react-dom"
import LikeBotao from "../LikeBotao/index.jsx"
export default function DalikeBotao() {
  const { pending } = useFormStatus()
  return (
    <LikeBotao>
      {pending ? (
        <Loader />
      ) : (
        <AiOutlineLike className="text-paragrafo text-2xl" />
      )}
    </LikeBotao>
  )
}
