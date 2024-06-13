import React from "react";

import Image from "next/image";
export default function Card({ img, postTitulo }) {
  console.log(img);
  return (
    <div className="w-full h-[300px]  flex flex-col justify-around ">
      <Image
        className="rounded-lg"
        width={350}
        height={250}
        src={img}
        alt="imagem do post"
      />
      <h2 className="text-textoPrincipal text-xl font-bold">{postTitulo}</h2>
    </div>
  );
}
