import React from "react"
import autor from "../../../../public/assets/img/autor.jpeg"
import Image from "next/image"
export default function Autor() {
  return (
    <div className="flex items-center gap-4 justify-start border-[1px] border-destaque rounded-lg p-1 hover:text-destaque">
      <p className="font-text">Feito por Arthur Gomes</p>
      <Image
        alt="Autor do blog"
        src={autor}
        width={32}
        className="rounded-full h-8 w-8"
      />
    </div>
  )
}
