import React from "react";

import Image from "next/image";
export default function Card({ img, postTitulo, tempo, data, resumo, autor }) {
  const descricao = typeof resumo === "string" ? resumo.slice(0, 150) : "";
  return (
    <div className="w-full sm:w-[450px] sm:h-[550px] rounded-lg  flex flex-col justify-between  ">
      <Image
        className=" w-full"
        width={400}
        height={100}
        src={img}
        alt="imagem do post"
      />
      <div className="flex p-4  gap-4 items-center ">
        <span className="text-textoPrincipal  text-xs sm:text-md  font-font2">
          por {autor}
        </span>
        <span className="text-textoPrincipal  text-xs sm:text-md  font-font2">
          {data}
        </span>
        <span className="text-textoPrincipal  text-xs sm:text-md  font-font2">
          {tempo}min
        </span>
      </div>
      <div className="w-full flex flex-col gap-4 p-4  ">
        <h2 className="text-titulo text-xl font-bold font-font1 ">
          {postTitulo}
        </h2>
        <p className="text-textoPrincipal text-sm sm:text-lg font-bold font-font2 w-full flex flex-wrap leading-6">
          {descricao}...
        </p>
      </div>
    </div>
  );
}
