import Link from "next/link";
import metadata from "./Utils/posters.json";
import Card from "./Componentes/CardPoster";

export default function Home() {
  return (
    <section className="justify-start flex gap-12 w-full flex-wrap mt-12">
      {metadata.map((item, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <Card img={item.img} postTitulo={item.titulo} />
          <Link href={`/Posters/${item.id}`}>
            <button className="bg-botao text-botaoTexto w-[200px] p-2 rounded-md">Acessar</button>
          </Link>
        </div>
      ))}
    </section>
  );
}
