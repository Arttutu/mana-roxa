import React from "react";
import BotaoCima from "../BotaoCima";

export default function Rodape() {
  return (
    <footer className=" bg-background2 p-8 w-full ">
      <div className="container mx-auto sm:flex sm:flex-row flex flex-col gap-4 items-center justify-around">
        <span className="text-textoPrincipal text-md sm:text-2xl">
          Copyright © Cronicas do console. Todos os direitos reservados.
        </span>
        <BotaoCima />
      </div>
    </footer>
  );
}
