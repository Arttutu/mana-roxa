"use server"
import { revalidatePath } from "next/cache"
import db from "../../prisma/db"
import { getServerSession } from "next-auth"
import { options } from "../app/api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"
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
  /*   await new Promise((resolve) => setTimeout(resolve, 1000)) */
  //pegando no banco de dados o o usuario para comentar
  /*   const author = await db.user.findFirst({
    where: {
      userautor: "Arthur",
    },
  }) */

  //pegando o usuario logado na sesssao
  const session = await getServerSession(options)

  await db.comentario.create({
    data: {
      Texto: formData.get("texto"),
      authorId: session.user.id,
      postId: post.id,
    },
  })
  revalidatePath("/")
  revalidatePath(`/${post.slug}`)
}
export async function Respoder(pai, formData) {
  /*   const author = await db.user.findFirst({
    where: {
      userautor: "Arthur",
    },
  }) */
  const session = await getServerSession(options)

  const post = await db.post.findFirst({
    where: {
      id: pai.postId,
    },
  })
  await db.comentario.create({
    data: {
      Texto: formData.get("texto"),
      authorId: session.user.id,
      postId: post.id,
      paiId: pai.paiId ?? pai.id,
    },
  })

  revalidatePath(` /${post.slug}`)
}

export async function criarUsuario(formData) {
  try {
    console.log("Iniciando cadastrado usuario")
    const hashedPassword = bcrypt.hashSync(formData.get("password"), 10)
    await db.user.create({
      data: {
        name: formData.get("name"),
        email: formData.get("email"),
        password: hashedPassword,
      },
    })
    console.log("Cadastro finalizado")
  } catch (e) {
    console.log("Iniciando cadastrado usuario", e)
    return
  }
  redirect("/login")
}
