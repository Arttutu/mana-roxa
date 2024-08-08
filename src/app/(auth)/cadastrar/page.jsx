import React from "react"
import { IoMdArrowRoundForward } from "react-icons/io"
import Contas from "../../Componentes/Contas"
import Link from "next/link"
import { criarUsuario } from "../../../actions"
export default async function Cadastro() {
  return (
    <div className=" bg-backgroundComentario p-8  w-full sm:w-[500px] sm:rounded-lg justify-cente mx-auto flex flex-col gap-4 items-start ">
      <form
        className=" sm:w-[500px] sm:rounded-lg flex flex-col gap-4 "
        action={criarUsuario}
      >
        <h1 className="text-4xl font-bold">Cadastro</h1>
        <h2 className="text-lg font-semibold">Olá! Preencha seus dados</h2>
        <div className="flex flex-col items- gap-2">
          <label>Nome</label>
          <input
            name="name"
            id="name"
            required
            type="text"
            placeholder="Nome completo"
            className="bg-background2 rounded-lg p-2 text-textoPrincipal  w-auto sm:w-[300px]"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label>E-mail</label>
          <input
            name="email"
            id="email"
            required
            type="email"
            placeholder="Digite o seu email"
            className="bg-background2 rounded-lg p-2 text-textoPrincipal w-auto sm:w-[300px]"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label>Senha</label>
          <input
            name="password"
            id="password"
            required
            type="password"
            placeholder="Digite sua senha"
            className="bg-background2 rounded-lg p-2 text-textoPrincipal w-auto sm:w-[300px]"
          />
        </div>
        <div className="flex gap-2 items-center">
          <input type="checkbox"></input>
          <p>Lembrar-me</p>
        </div>

        <button
          type="submit"
          className="bg-botao  text-lg p-4 rounded-lg text-textoPrincipal font-bold w-32 flex gap-2 items-center justify-center hover:rounded-full transition-all"
        >
          Cadastrar <IoMdArrowRoundForward className="text-lg" />
        </button>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-sm">ou entre com outras contas</p>
          <Contas />
          <div className="flex items-center gap-2">
            <span className="text-sm">Já tem conta?</span>
            <Link href={"/login"} className="text-destaque text-sm font-bold">
              Faça seu login!
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
