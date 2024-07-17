"use client"
import * as Dialog from "@radix-ui/react-dialog"
import { BiCommentDetail } from "react-icons/bi"
import React from "react"
import ComentarioBotao from "../ComentarioBotao/index.jsx"
import { IoMdClose } from "react-icons/io"
import { Comentar } from "../../../actions/index.jsx"
export default function ModalComentario({ post }) {
  const EnviarComentario = Comentar.bind(null, post)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <BiCommentDetail className="text-paragrafo text-2xl" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-background/50" />
        <Dialog.Content className="bg-background2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[744px] sm:h-auto flex flex-col items-start gap-4 rounded-lg p-8">
          <Dialog.Title className="text-textoPrincipal text-xl font-semibold">
            Deixe um comentário
          </Dialog.Title>
          <Dialog.Description className="w-full h-auto"></Dialog.Description>
          <form className="w-full h-auto" action={EnviarComentario}>
            <textarea
              name="texto"
              rows={8}
              placeholder="Deixe seu comentário..."
              className="w-full h-[200px] rounded-lg focus:outline-none p-2 border focus:ring-2"
            />
            <Dialog.Close asChild>
              <ComentarioBotao>Comentar</ComentarioBotao>
            </Dialog.Close>
          </form>
          <Dialog.Close asChild>
            <button className="absolute top-2 right-2 text-textoPrincipal text-xl">
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
