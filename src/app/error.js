"use client" // Error components must be Client Components

import { useEffect } from "react"
import broken from "../../public/assets/img/error/broken.png"
import Image from "next/image"
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Image src={broken} width={400} height={500} alt="relógio quebrado" />
      <h2 className="text-textoPrincipal text-4xl font-bold">
        Ops algo deu errado
      </h2>
    </div>
  )
}
