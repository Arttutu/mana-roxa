"use client"
import React from "react"
import { FaGithub } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import { signIn } from "next-auth/react"
export default function Contas() {
  async function login(event) {
    event.preventDefault()
    signIn("github", {
      callbackUrl: "/",
    })
  }
  return (
    <div className="flex gap-4">
      <button className="flex flex-col gap-2 items-center disabled:opacity-50">
        <FcGoogle className="text-2xl disabled:opacity-50" />
        <span className="text-sm">Google</span>
      </button>
      <button className="flex flex-col gap-2 items-center">
        <FaGithub className="text-2xl" onClick={login} />
        <span className="text-sm">Github</span>
      </button>
    </div>
  )
}
