import Link from "next/link";
import metadata from "./Utils/posters.json";
import Card from "./Componentes/CardPoster";

export default function Home() {
  return (
    <section className="justify-center flex gap-12 w-full flex-wrap mt-12">
      {metadata.map((item, index) => (
        <div className=" bg-background2 rounded-lg  flex items-center justify-between flex-col gap-4" key={index}>
          <Card img={item.img} postTitulo={item.titulo} tempo={item.tempo} data={item.data} resumo={item.texto} />
          <Link href={`/Posters/${item.id}`}>
            <button className="bg-botao text-botaoTexto w-[200px] p-2 m-8 rounded-md">Ler Mais</button>
          </Link>
        </div>
      ))}
    </section>
  );
}
