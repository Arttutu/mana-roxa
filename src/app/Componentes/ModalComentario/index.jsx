"use client"
import * as Dialog from "@radix-ui/react-dialog"
import { BiCommentDetail } from "react-icons/bi"
import React, { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import { IoMdArrowRoundForward } from "react-icons/io"
import { useFormStatus } from "react-dom"
import { useSession } from "next-auth/react"
export default function ModalComentario({ post, pagina }) {
  const [mensagem, setMensagem] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const { pending } = useFormStatus()
  const { data: session } = useSession()

  async function EnviarComentario(formData) {
    try {
      await Comentar(post, formData)
      setMensagem("Mensagem enviada com sucesso")
    } catch (error) {
      setMensagem("Erro ao enviar mensagem")
    }
  }
  useEffect(() => {
    if (!isOpen) {
      setMensagem("")
    }
  }, [isOpen])
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger disabled={!session || pending} asChild>
        {pagina ? (
          <button className="font-bold underline text-sm cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">
            Escreva um comentário
          </button>
        ) : (
          <button className="disabled:cursor-not-allowed disabled:opacity-50">
            <BiCommentDetail className="  text-paragrafo text-2xl transition-all hover:text-destaque " />
          </button>
        )}
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
              required
              name="texto"
              rows={8}
              placeholder="Deixe seu comentário..."
              className="w-full h-[200px] rounded-lg focus:outline-none p-2 border focus:ring-2"
            />

            <button
              className="mt-4 text-textoPrincipal  bg-botao text-md flex items-center gap-2 justify-center p-2 rounded-lg hover:rounded-full transition-all"
              type="submit"
            >
              Comentar
              <IoMdArrowRoundForward />
            </button>
            {mensagem && (
              <div className="py-4">
                <p className="text-destaque font-bold text-md">{mensagem}</p>
              </div>
            )}
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
