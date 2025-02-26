import { createClient } from "@prismicio/client"
import TelaPublicacao from "../Componentes/TelaPublicacao"
export default async function Home() {
  const client = createClient("mana-roxa", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })
  let posts = []
  try {
    // Pega a ref mais recente para garantir que estamos pegando os dados mais atualizados
    const api = await client.getRepository()
    const ref = api.refs.find((r) => r.isMasterRef)?.ref
    // Garante que estamos sempre pegando dados atualizados
    posts = await client.getAllByType("post", { ref, cache: "no-store" })
  } catch (error) {
    console.error("Erro ao buscar posts:", error)
  }

  return (
    <section className="flex justify-center items-center gap-16 w-full flex-wrap">
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
