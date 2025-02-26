"use client"
import React from "react"
import { FcGoogle } from "react-icons/fc"

export default function Contas() {
  return (
    <div className="flex gap-4">
      <button
        className="flex justify-center w-[300px]  bg-background2 p-2 rounded-lg transition-all hover:rounded-full gap-4 items-center disabled:opacity-50"
        onClick={login}
      >
        <FcGoogle className="text-2xl disabled:opacity-50" />
        <span className="text-sm text-textoPrincipal">Google</span>
      </button>
    </div>
  )
}
