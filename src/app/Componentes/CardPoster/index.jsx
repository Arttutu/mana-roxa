import React from "react";

import Image from "next/image";
export default function Card({ img, postTitulo, tempo, data, resumo }) {
  const descricao = typeof resumo === "string" ? resumo.slice(0, 70) : "";
  return (
    <div className="w-full h-[auto]  flex flex-col justify-around ">
      <Image
        className="rounded-lg"
        width={350}
        height={250}
        src={img}
        alt="imagem do post"
      />
      <div className="flex gap-4 items-center">
        <span className="text-textoPrincipal text-md  font-font2">{data}</span>
        <span className="text-textoPrincipal text-md  font-font2">
          {tempo}min
        </span>
      </div>
      <h2 className="text-textoPrincipal text-xl font-bold font-font1">
        {postTitulo}
      </h2>
      <div className=""></div>
      <p className="text-textoPrincipal text-md font-bold font-font2 w-full flex flex-wrap">
        {descricao}...
      </p>
    </div>
  );
}
