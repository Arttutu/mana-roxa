"use client"

import { useEffect } from "react"

import Image from "next/image"
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/*      <Image src={""} width={400} height={500} alt="relógio quebrado" /> */}
      <h2 className="text-textoPrincipal text-4xl font-bold">
        Ops algo deu errado
      </h2>
    </div>
  )
}
