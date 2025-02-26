import React from "react"
import Contas from "../../Componentes/Contas"

export default async function Login(/* { error } */) {
  return (
    <div className=" bg-backgroundComentario p-8  w-full sm:w-[500px] sm:rounded-lg justify-cente mx-auto flex flex-col gap-4 items-start ">
      <h1 className="text-4xl font-bold">Login</h1>
      <h2 className="text-lg font-semibold">Boas-vindas! Faça seu login</h2>
      <div className="flex flex-col gap-4 items-start">
        <Contas />
      </div>
    </div>
  )
}
