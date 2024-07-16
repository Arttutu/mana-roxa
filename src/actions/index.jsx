"use server"
import { revalidatePath } from "next/cache"
import db from "../../prisma/db"
export async function DaLike(post) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await db.post.update({
    where: { id: post.id },
    data: { likes: { increment: 1 } },
  })
  //recarregar a pagina depois que efeutuar o like
  revalidatePath("/")
  revalidatePath(` /${post.slug}`)
}
export async function Comentar(post, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const author = await db.user.findFirst({
    where: {
      userautor: "Arthur",
    },
  })
  await db.comentario.create({
    data: {
      Texto: formData.get("texto"),
      authorId: author.id,
      postId: post.id,
    },
  })
  revalidatePath("/")
  revalidatePath(` /${post.slug}`)
}
export async function Respoder(pai, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const author = await db.user.findFirst({
    where: {
      userautor: "Arthur",
    },
  })
  const post = await db.post.findFirst({
    where: {
      id: pai.postId,
    },
  })
  await db.comment.create({
    data: {
      Texto: formData.get("texto"),
      authorId: author.id,
      postId: post.id,
      parentId: parent.parentId ?? parent.id,
    },
  })

  revalidatePath(` /${post.slug}`)
}
