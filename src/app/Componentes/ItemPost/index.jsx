import Image from "next/image"
import React from "react"

export default function ItemPost({ imagem, titulo, texto, posterData }) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className=" text-xl sm:text-3xl text-textoPrincipal ">
        {titulo ? titulo : ""}
      </h2>
      <p className=" text-md sm:text-xl text-paragrafo leading-8 ">
        {texto ? texto : ""}
      </p>

      {!posterData.imagem ? (
        <div className="w-full flex justify-center bg-background2 p-12">
          <Image
            alt={`imagem do poster do conteudo do titulo de ${titulo} `}
            src={imagem}
            width={500}
            height={500}
          />
        </div>
      ) : (
        ""
      )}
    </section>
  )
}
