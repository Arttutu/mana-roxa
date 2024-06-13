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
  const { titulo, descricao, texto, texto2, texto3, imagem1, imagem2 } =
    posterData;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-textoPrincipal text-2xl font-semibold">{titulo}</h1>
      <p className="text-xl text-textoPrincipal">{descricao}</p>
      <div className="flex flex-col items-start gap-24">
        <p className=" text-md sm:text-xl text-paragrafo">{texto}</p>
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
        <p className=" text-md sm:text-xl text-paragrafo">{texto2}</p>
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
        <p className=" text-md sm:text-xl text-paragrafo">{texto3}</p>
      </div>
    </div>
  );
}
