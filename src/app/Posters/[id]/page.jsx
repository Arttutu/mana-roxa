"use client";
import { useParams } from "next/navigation";
import React from "react";
import metadata from "../../Utils/posters.json";
import Image from "next/image";

export default function Poster() {
  const params = useParams();
  const id = parseInt(params.id, 10);

  const posterData = metadata.find((item) => item.id === id);

  if (!posterData) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-textoPrincipal text-2xl font-semibold">
          Título não encontrado
        </h1>
        <div>
          <p className="text-xl text-paragrafo">Descrição não encontrada</p>
        </div>
      </div>
    );
  }

  const {
    titulo,
    titulo2,
    titulo3,
    titulo4,
    texto,
    texto2,
    texto3,
    imagem1,
    imagem2,
    video,
    texto4,
  } = posterData;

  return (
    <div className="flex flex-col">
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
        <div className="w-full flex items-center justify-center">
          <iframe
            width="800"
            height="500"
            src={video}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <h2 className=" text-xl sm:text-3xl text-textoPrincipalfont-font1">
          {titulo2}
        </h2>
        <p className=" text-md sm:text-2xl text-paragrafo leading-8 ">
          {texto2}
        </p>
        <h3 className=" text-xl sm:text-3xl text-textoPrincipal font-font2">
          {titulo3}
        </h3>
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
        <p className=" text-md sm:text-2xl leading-8 text-paragrafo font-font2">
          {texto3}
        </p>
        <h3 className=" text-xl sm:text-3xl text-textoPrincipal font-font2">
          {titulo4}
        </h3>
        <p className=" text-md sm:text-2xl leading-8 text-paragrafo font-font2">
          {texto4}
        </p>
      </div>
    </div>
  );
}
