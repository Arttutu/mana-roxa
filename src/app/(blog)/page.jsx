import TelaPublicacao from "../Componentes/TelaPublicacao"
import { fetchPosts } from "../utils/fetch-posts"

export default async function Home() {
  const posts = await fetchPosts()

  return (
    <section className="flex  justify-around gap-12   w-full flex-wrap">
      {posts.map((post) => (
        <div key={post.uid}>
          <TelaPublicacao post={post} />
        </div>
      ))}
    </section>
  )
}
