import { createClient } from "@prismicio/client"

// Função para selecionar os ultmos post
export async function lastPost() {
  const client = createClient("mana-roxa", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetchOptions: { cache: "no-store" },
  })
  const posts = await client.getAllByType("post")

  const lastPost = posts.slice(posts.length - 2, posts.length)
  return lastPost
}
