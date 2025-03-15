import { createClient } from "@prismicio/client"

// Função para buscar os posts paginados
export async function fetchPosts(page = 1) {
  const client = createClient("mana-roxa", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetchOptions: { cache: "no-store" },
  })

  const response = await client.getByType("post", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
    pageSize: 3, // Máximo de 6 posts por página
    page: page, // Página atual
  })

  return {
    posts: response.results,
    totalPages: response.total_pages, // Total de páginas
  }
}
