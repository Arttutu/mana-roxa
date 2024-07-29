import Link from "next/link"
import React from "react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa6"
import { IoMdArrowRoundForward } from "react-icons/io"
import Contas from "../../Componentes/Contas"
export default async function Login() {
  return (
    <div className="flex justify-around w-full">
      <form className="bg-backgroundComentario p-8  w-full sm:w-[500px] sm:rounded-lg flex flex-col gap-4 items-center ">
        <h1 className="text-4xl font-bold">Login</h1>
        <h2 className="text-lg font-semibold">Boas-vindas! Faça seu login</h2>
        <div className="flex flex-col items- gap-2">
          <label>Email ou usuário</label>
          <input
            type="text"
            placeholder="Digite o seu email"
            className="bg-background2 rounded-lg p-2 text-textoPrincipal  w-auto sm:w-[300px]"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="bg-background2 rounded-lg p-2 text-textoPrincipal w-auto sm:w-[300px]"
          />
        </div>
        <button
          type="submit"
          className="bg-botao  text-lg p-4 rounded-lg text-textoPrincipal font-bold w-32 flex gap-2 items-center justify-center"
        >
          Entrar <IoMdArrowRoundForward className="text-lg" />
        </button>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-sm">ou entre com outras contas</p>
          <Contas />
          <span className="text-sm">Ainda nao tem conta ?</span>
          <Link href={""} className="text-destaque text-lg">
            Crie o seu cadastro !
          </Link>
        </div>
      </form>
    </div>
  )
}
