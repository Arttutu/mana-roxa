"use client" // Error components must be Client Components

import { useEffect } from "react"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2 className="text-textoPrincipal text-4xl font-bold">
        Ocorreu um erro inesperado.
      </h2>
    </div>
  )
}
