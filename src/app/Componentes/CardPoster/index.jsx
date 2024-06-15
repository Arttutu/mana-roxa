import React from "react";

import Image from "next/image";
export default function Card({ img, postTitulo, tempo, data, resumo }) {
  const descricao = typeof resumo === "string" ? resumo.slice(0, 150) : "";
  return (
    <div className="w-[450px]   rounded-lg  flex flex-col justify-between  ">
      <Image
        className=" w-full"
        width={350}
        height={100}
        src={img}
        alt="imagem do post"
      />
      <div className="flex p-4  gap-4 items-center ">
        <span className="text-textoPrincipal text-md  font-font2">{data}</span>
        <span className="text-textoPrincipal text-md  font-font2">
          {tempo}min
        </span>
      </div>
      <div className="w-full flex flex-col gap-4 p-4  ">
        <h2 className="text-titulo text-xl font-bold font-font1 ">
          {postTitulo}
        </h2>
        <p className="text-textoPrincipal text-lg font-bold font-font2 w-full flex flex-wrap leading-6">
          {descricao}...
        </p>
      </div>
    </div>
  );
}
