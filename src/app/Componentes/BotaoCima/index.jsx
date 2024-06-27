"use client";
import React from "react";

export default function BotaoCima() {
  const subir = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona uma animação suave ao rolar
    });
  };
  return (
    <button
      onClick={subir}
      className="bg-botao rounded-full p-4 text-textoPrincipal text-md sm:text-md"
    >
      Voltar para cima
    </button>
  );
}
