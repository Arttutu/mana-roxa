import React from "react";

import Image from "next/image";
export default function Card({ img, postTitulo }) {
  console.log(img);
  return (
    <div className=" w-full sm:w-[400px]   flex flex-col gap-4">
      <Image
        className="w-full"
        width={400}
        height={300}
        src={img}
        alt="imagem do post"
      />
      <h2 className="text-textoPrincipal text-xl font-bold">{postTitulo}</h2>
    </div>
  );
}
