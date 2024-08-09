import Link from "next/link"
import React from "react"
import Contas from "../../Componentes/Contas"

import FormLogin from "../../Componentes/FormLogin"
export default async function Login(/* { error } */) {
  return (
    <div className=" bg-backgroundComentario p-8  w-full sm:w-[500px] sm:rounded-lg justify-cente mx-auto flex flex-col gap-4 items-start ">
      {/*     {error === "email-ja-existe" ? (
        <h1 className="font-bold text-erro text-xl">
          Você ja tem um e-mail cadastrado
        </h1>
      ) : (
        ""
      )} */}
      <FormLogin />
      <div className="flex flex-col gap-4 items-start">
        <p className="text-sm">ou entre com outras contas</p>
        <Contas />
        <span className="text-sm">Ainda nao tem conta ?</span>
        <Link
          href={"/cadastrar"}
          className="text-destaque text-sm font-bold hover:text-background2 transition-all"
        >
          Crie o seu cadastro !
        </Link>
      </div>
    </div>
  )
}
