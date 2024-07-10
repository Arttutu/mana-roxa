import TelaPublicacao from "./Componentes/TelaPublicacao/index.jsx"
import looger from "../logger.js"
import Link from "next/link.js"
import db from "../../prisma/db.js"

async function getPublicacao(page) {
  try {
    const posts = await db.post.findMany({
      include: {
        author: true,
      },
    })

    // Converta as datas para strings antes de retornar os posts
    const formattedPosts = posts.map((post) => ({
      ...post,
      data: post.data.toISOString(), // Converta para string ISO
    }))

    return { data: formattedPosts, prev: null, next: null }
  } catch (error) {
    looger.error(" failed to get publicacao", { error })
    return { data: [], prev: null, next: null }
  }
}

export default async function Home({ searchParams }) {
  const PaginaAtual = searchParams?.page || 1
  const { data: posts, prev, next } = await getPublicacao(PaginaAtual)
  return (
    <section className="justify-center flex  gap-8 w-full flex-wrap">
      <TelaPublicacao post={posts} />
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
