import Link from "next/link";
import metadata from "./Utils/posters.json";
import Card from "./Componentes/CardPoster";

export default function Home() {
  return (
    <section className="justify-center flex gap-12 w-full flex-wrap ">
      {metadata.map((item, index) => (
        <div className=" bg-background2 rounded-lg  flex   flex-col " key={index}>
          <Card img={item.imagem1} postTitulo={item.titulo} tempo={item.tempo} data={item.data} resumo={item.texto} autor={item.autor} />
          <Link href={`/Posters/${item.id}`}>
            <button className="bg-botao text-botaoTexto w-[200px] p-2 m-8 rounded-md shadow-sm shadow-botao">Ler Mais</button>
          </Link>
        </div>
      ))}
      
      
    </section>
  );
}
