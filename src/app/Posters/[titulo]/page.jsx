"use client"
import { useParams } from "next/navigation"
import React from "react"
import { publicacao } from "../../data/constates/publicacao"
import Image from "next/image"
import ItemPost from "../../Componentes/ItemPost/index.jsx"
export default function Poster() {
  const params = useParams()
  const urlTitulo = decodeURIComponent(params.titulo)

  const posterData = publicacao.find((item) => item.titulo === urlTitulo)

  if (!posterData) {
    return (
      <section className="flex h-screen flex-col gap-4">
        <h1 className="text-textoPrincipal text-2xl font-semibold">
          Título não encontrado
        </h1>
        <div>
          <p className="text-xl text-paragrafo">Descrição não encontrada</p>
        </div>
      </section>
    )
  }
  const {
    titulo,
    titulo2,
    titulo3,
    titulo4,
    titulo5,
    titulo6,
    texto,
    texto2,
    texto3,
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    imagem6,
    video,
    texto4,
    texto5,
    texto6,
  } = posterData

  return (
    <section className=" flex flex-col">
      <div className="flex flex-col items-start gap-8 ">
        {posterData.imagem1 ? (
          <div className="flex items-center w-full justify-center py-12  ">
            <Image
              className="rounded-xl"
              alt="imagem de numero 1 do poster"
              src={imagem1}
              width={800}
              height={500}
            ></Image>
          </div>
        ) : (
          ""
        )}
        <h1 className="text-textoPrincipal  text-xl sm:text-3xl  font-font1">
          {titulo}
        </h1>
        <p className=" text-md sm:text-2xl text-paragrafo font-font2">
          {texto}
        </p>
        {video ? (
          <div className="w-full flex items-center justify-center">
            <iframe
              width="800"
              height="500"
              src={video}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        ) : (
          ""
        )}
        <ItemPost
          posterData={posterData}
          imagem={imagem2}
          texto={texto2}
          titulo={titulo2}
        />
        <ItemPost
          posterData={posterData}
          imagem={imagem3}
          texto={texto3}
          titulo={titulo3}
        />
        <ItemPost
          posterData={posterData}
          imagem={imagem4}
          texto={texto4}
          titulo={titulo4}
        />
        <ItemPost
          posterData={posterData}
          imagem={imagem5}
          texto={texto5}
          titulo={titulo5}
        />
        <ItemPost
          posterData={posterData}
          imagem={imagem6}
          texto={texto6}
          titulo={titulo6}
        />
      </div>
    </section>
  )
}
