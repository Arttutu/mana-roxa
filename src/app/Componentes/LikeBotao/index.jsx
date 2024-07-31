import React from "react"

export default function Botao({ children, ...rest }) {
  return (
    <button
      {...rest}
      className="border-none cursor-pointer w-full h-auto disabled:cursor-not-allowed disabled:opacity-70"
    >
      {children}
    </button>
  )
}
