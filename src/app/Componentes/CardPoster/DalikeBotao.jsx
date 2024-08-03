"use client"
import React from "react"
import { AiOutlineLike } from "react-icons/ai"
import Loader from "../loader"
import { useFormStatus } from "react-dom"
import LikeBotao from "../LikeBotao/index.jsx"
import { useSession } from "next-auth/react"
export default function DalikeBotao() {
  const { pending } = useFormStatus()
  const { data: session } = useSession()
  return (
    <LikeBotao disabled={!session || pending}>
      {pending ? (
        <Loader />
      ) : (
        <AiOutlineLike className="text-paragrafo text-2xl hover:text-destaque transition-all" />
      )}
    </LikeBotao>
  )
}
