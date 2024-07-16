import React from "react"

export default function LikeBotao({ children, ...rest }) {
  return (
    <button {...rest} className="border-none cursor-pointer w-full h-auto">
      {children}
    </button>
  )
}
