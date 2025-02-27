import TelaPublicacao from "../Componentes/TelaPublicacao"
import { fetchPosts } from "../utils/fetch-posts"

export default async function Home() {
  const posts = await fetchPosts()

  return (
    <section className="flex justify-start items-center gap-16 w-full flex-wrap">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.uid}>
            <TelaPublicacao post={post} />
          </div>
        ))
      ) : (
        <p>Não há posts disponíveis.</p>
      )}
    </section>
  )
}
