import { createClient } from "@prismicio/client"

export async function fetchPosts() {
  const client = createClient("mana-roxa", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })

  try {
    // Obtém a referência mais recente
    const api = await client.getRepository()
    const ref = api.refs.find((r) => r.isMasterRef)?.ref

    // Busca os posts do Prismic
    return await client.getAllByType("post", { ref, cache: "no-store" })
  } catch (error) {
    console.error("Erro ao buscar posts:", error)
    return []
  }
}
