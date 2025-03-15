import TelaPublicacao from "../Componentes/TelaPublicacao"
import SubirCima from "../Componentes/UI/subirCima"
import { fetchPosts } from "../utils/fetch-posts"
import Pagination from "../Componentes/UI/Paginacao"

export default async function Home({ searchParams }) {
  // Obtém a página atual dos searchParams (padrão: 1)
  const currentPage = Number(searchParams.page) || 1

  // Busca os posts da página atual
  const { posts, totalPages } = await fetchPosts(currentPage)

  return (
    <>
      <section className="flex justify-center gap-24 w-full flex-wrap">
        {/* Renderiza os posts */}
        {posts.map((post) => (
          <div key={post.uid}>
            <TelaPublicacao post={post} />
          </div>
        ))}

        <SubirCima />
      </section>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  )
}
