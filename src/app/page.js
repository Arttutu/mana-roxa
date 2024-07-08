import TelaPublicacao from "./Componentes/TelaPublicacao/index.jsx"
import looger from "../logger.js"
import Link from "next/link.js"
async function getPublicacao(page) {
  const response = await fetch(
    `http://localhost:3042/Posters?_page=${page}&_per_page=7`
  )
  if (!response.ok) {
    looger.error("Falha ao carregar dados da API")
    return []
  }
  looger.info("Carregando dados da API com sucesso")
  return response.json()
}

export default async function Home({ searchParams }) {
  const PaginaAtual = searchParams?.page || 1
  const { data: posts, prev, next } = await getPublicacao(PaginaAtual)
  return (
    <section className="justify-center flex  gap-8 w-full flex-wrap">
      <TelaPublicacao publicacao={posts} />
      <div className="flex items-start gap-12">
        {prev && (
          <Link
            href={`/?page=${prev}`}
            className="text-2xl text-botao hover:text-textoPrincipal transition-all underline"
          >
            Pagina Anterior
          </Link>
        )}
        {next && (
          <Link
            href={`/?page=${next}`}
            className="text-2xl text-botao hover:text-textoPrincipal transition-all underline"
          >
            Próxima Pagina
          </Link>
        )}
      </div>
    </section>
  )
}
