import { createClient } from "@prismicio/client"

// Função para buscar os posts
export async function fetchPosts() {
  const client = createClient("mana-roxa", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetchOptions: { cache: "no-store" },
  })
  const posts = await client.getAllByType("post")

  return posts
}
