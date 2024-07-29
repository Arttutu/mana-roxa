import React from "react"
import { FaGithub } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"

export default function Contas() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2 items-center">
        <FcGoogle className="text-2xl" />
        <span className="text-sm">Github</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <FaGithub className="text-2xl" />
        <span className="text-sm">Email</span>
      </div>
    </div>
  )
}
