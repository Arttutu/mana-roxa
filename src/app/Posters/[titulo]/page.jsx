"use client"
import { useParams } from "next/navigation"
import React from "react"
import { publicacao } from "../../data/constates/publicacao"
import Image from "next/image"

export default function Poster() {
  const params = useParams()
  const urlTitulo = decodeURIComponent(params.titulo)

  const posterData = publicacao.find((item) => item.titulo === urlTitulo)

  if (!posterData) {
    return (
      <div className="flex h-screen flex-col gap-4">
        <h1 className="text-textoPrincipal text-2xl font-semibold">
          Título não encontrado
        </h1>
        <div>
          <p className="text-xl text-paragrafo">Descrição não encontrada</p>
        </div>
      </div>
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
    <div className=" flex flex-col">
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

        <h2 className=" text-xl sm:text-3xl text-textoPrincipal font-font1">
          {titulo2}
        </h2>
        <p className=" text-md sm:text-2xl text-paragrafo leading-8 ">
          {texto2}
        </p>

        {posterData.imagem2 ? (
          <div className="w-full flex justify-center bg-background2 p-12">
            <Image
              alt="imagem de numero 1 do poster"
              src={imagem2}
              width={500}
              height={500}
            ></Image>
          </div>
        ) : (
          ""
        )}
        <h3 className=" text-xl sm:text-3xl text-textoPrincipal font-font2">
          {titulo3}
        </h3>
        <p className=" text-md sm:text-2xl leading-8 text-paragrafo font-font2">
          {texto3}
        </p>
        {imagem3 ? (
          <div className="w-full flex justify-center bg-background2 p-12">
            <Image
              priority
              alt="imagem de numero 3 do poster"
              src={imagem3}
              width={500}
              height={500}
            />
          </div>
        ) : (
          ""
        )}
        <h3 className=" text-xl sm:text-3xl text-textoPrincipal font-font2">
          {titulo4}
        </h3>
        <p className=" text-md sm:text-2xl leading-8 text-paragrafo font-font2">
          {texto4}
        </p>
        {imagem4 ? (
          <div className="w-full flex justify-center bg-background2 p-12">
            <Image
              alt="imagem de numero 6 do poster"
              src={imagem4}
              width={500}
              height={500}
            />
          </div>
        ) : (
          ""
        )}
        <h3 className=" text-xl sm:text-3xl text-textoPrincipal font-font2">
          {titulo5}
        </h3>
        <p className=" text-md sm:text-2xl leading-8 text-paragrafo font-font2">
          {texto5}
        </p>
        {imagem5 ? (
          <div className="w-full flex justify-center bg-background2 p-12">
            <Image
              alt="imagem de numero 6 do poster"
              src={imagem5}
              width={500}
              height={500}
            />
          </div>
        ) : (
          ""
        )}
        <h3 className=" text-xl sm:text-3xl text-textoPrincipal font-font2">
          {titulo6}
        </h3>
        <p className=" text-md sm:text-2xl leading-8 text-paragrafo font-font2">
          {texto6}
        </p>
        {imagem6 ? (
          <div className="w-full flex justify-center bg-background2 p-12">
            <Image
              alt="imagem de numero 6 do poster"
              src={imagem6}
              width={500}
              height={500}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
