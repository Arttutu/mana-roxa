"use client"
import React from "react"
import { FaGithub } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import { signIn } from "next-auth/react"
export default function Contas() {
  /*  async function login(event) {
    event.preventDefault()
    signIn("github", {
      callbackUrl: "/",
    }) */
  async function login(event) {
    event.preventDefault()
    await signIn("google", {
      callbackUrl: "/",
    })
  }
  return (
    <div className="flex gap-4">
      <button
        className="flex justify-center w-[300px]  bg-background2 p-2 rounded-lg transition-all hover:rounded-full gap-4 items-center disabled:opacity-50"
        onClick={login}
      >
        <FcGoogle className="text-2xl disabled:opacity-50" />
        <span className="text-sm text-textoPrincipal">Google</span>
      </button>
      {/*       <button className="flex flex-col gap-2 items-center">
        <FaGithub className="text-2xl" onClick={login} />
        <span className="text-sm">Github</span>
      </button> */}
    </div>
  )
}
