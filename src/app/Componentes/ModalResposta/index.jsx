"use client"
import React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Respoder } from "../../../actions/index.jsx"
import { IoMdArrowRoundForward } from "react-icons/io"
import { IoMdClose } from "react-icons/io"
import Comentario from "../Comentario/index.jsx"
import ComentarioBotao from "../ComentarioBotao/index.jsx"
export default function ModalResposta({ comentario }) {
  const action = Respoder.bind(null, comentario)

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="text-md font-bold hover:text-hover transition-all">
            Responder
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-background/50" />
          <Dialog.Content className="bg-background2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[744px] sm:h-auto flex flex-col items-start gap-4 rounded-lg p-8">
            <Dialog.Title className="text-textoPrincipal text-xl font-semibold">
              Responda o comentário
            </Dialog.Title>
            <Dialog.Description className="w-full h-auto text-textoPrincipal">
              Escreva sua <strong>mensagem!</strong>
            </Dialog.Description>
            <div className="text-textoPrincipal">
              <Comentario comentario={comentario} />
            </div>
            <form className="w-full h-auto" action={action}>
              <textarea
                required
                name="texto"
                placeholder="Deixe seu comentário..."
                rows={8}
                className="w-full h-[200px] rounded-lg focus:outline-none p-2 border focus:ring-2"
              />
              <Dialog.Close asChild>
                <ComentarioBotao>Responder</ComentarioBotao>
                {/*    <button className="mt-4 text-textoPrincipal  bg-botao text-md flex items-center gap-2 justify-center p-2 rounded-lg">
                  Responder
                  <IoMdArrowRoundForward />
                </button> */}
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
    </>
  )
}
