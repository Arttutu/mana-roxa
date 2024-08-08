"use client"
import React, { useState } from "react"
import { signIn } from "next-auth/react"
import { IoMdArrowRoundForward } from "react-icons/io"

export default function FormLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const loginCredentials = async (event) => {
    event.preventDefault()
    setError("") // Resetar o erro ao tentar logar

    const result = await signIn("credentials", {
      redirect: false, // Evita redirecionamento automático
      email: email,
      password: password,
    })

    if (result.error) {
      setError("Credenciais inválidas. Por favor, tente novamente.") // Define a mensagem de erro
    } else {
      window.location.href = "/" // Redireciona em caso de sucesso
    }
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={loginCredentials}>
      <h1 className="text-4xl font-bold">Login</h1>
      <h2 className="text-lg font-semibold">Boas-vindas! Faça seu login</h2>

      {error && <span className="text-erro">{error}</span>}

      <div className="flex flex-col gap-2">
        <label>Email ou usuário</label>
        <input
          type="text"
          placeholder="Digite o seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background2 rounded-lg p-2 text-textoPrincipal w-auto sm:w-[300px]"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-background2 rounded-lg p-2 text-textoPrincipal w-auto sm:w-[300px]"
        />
      </div>
      <button
        type="submit"
        className="bg-botao text-lg p-4 rounded-lg text-textoPrincipal font-bold w-32 flex gap-2 items-center justify-center hover:rounded-full transition-all"
      >
        Entrar <IoMdArrowRoundForward className="text-lg" />
      </button>
    </form>
  )
}
