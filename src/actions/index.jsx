"use server"
import { revalidatePath } from "next/cache"
import db from "../../prisma/db"
export async function DaLike(post) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  await db.post.update({
    where: { id: post.id },
    data: { likes: { increment: 1 } },
  })
  //recarregar a pagina depois que efeutuar o like
  revalidatePath("/")
  revalidatePath(` /${post.slug}`)
}
