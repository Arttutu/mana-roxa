import React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Respoder } from "../../../actions/index.jsx"
import ComentarioBotao from "../ComentarioBotao"
export default function ModalResposta({ pai }) {
  const ResponderComentario = Respoder.bind(pai, null)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ComentarioBotao>Responder</ComentarioBotao>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-background/50" />
        <Dialog.Content className="bg-background2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[744px] sm:h-auto flex flex-col items-start gap-4 rounded-lg p-8">
          <Dialog.Title className="text-textoPrincipal text-xl font-semibold">
            Responda o comentário
          </Dialog.Title>
          <Dialog.Description className="w-full h-auto"></Dialog.Description>
          <form className="w-full h-auto" action={ResponderComentario}>
            <textarea
              name="texto"
              placeholder="Deixe seu comentário..."
              className="w-full h-[200px] rounded-lg focus:outline-none p-2 border focus:ring-2"
            />
            <Dialog.Close asChild>
              <ComentarioBotao>Responder</ComentarioBotao>
            </Dialog.Close>
          </form>
          <Dialog.Close asChild>
            <button className="absolute top-2 right-2 text-textoPrincipal text-xl">
              x
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
