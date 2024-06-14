"use client";
import { useParams } from "next/navigation";
import React from "react";
import metadata from "../../Utils/posters.json";
import Image from "next/image";

export default function Poster() {
  const params = useParams();
  const id = parseInt(params.id, 10); // Obtém o id da URL e converte para número

  // Encontra o pôster correspondente no metadata
  const posterData = metadata.find((item) => item.id === id);

  // Se não encontrar o pôster, exibe mensagem de erro
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

  // Desestrutura o título e a descrição do pôster encontrado
  const {
    titulo,
    titulo2,
    titulo3,
    descricao,
    texto,
    texto2,
    texto3,
    imagem1,
    imagem2,
  } = posterData;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-8 items-center">
        <h1 className="text-textoPrincipal text-2xl font-semibold font-font1">
          {titulo}
        </h1>
        <span className=" text-textoPrincipal text-4xl">-</span>
        <p className="text-xl text-textoPrincipal  font-font1">{descricao}</p>
      </div>
      <div className="flex flex-col items-start gap-8 mt-12">
        <h2 className="text-3xl text-textoPrincipal font-font1">{titulo2}</h2>
        <p className=" text-md sm:text-xl text-paragrafo font-font2">{texto}</p>
        {posterData.imagem1 ? (
          <div className="w-full flex justify-center bg-background2 p-12">
            <Image
              alt="imagem de numero 1 do poster"
              src={imagem1}
              width={500}
              height={500}
            ></Image>
          </div>
        ) : (
          ""
        )}
        <h3 className="text-3xl text-textoPrincipal font-font2">{titulo3}</h3>
        <p className=" text-md sm:text-xl text-paragrafo font-font2">
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
        <p className=" text-md sm:text-xl text-paragrafo font-font2">
          {texto3}
        </p>
      </div>
    </div>
  );
}
