import { PrismaClient } from "@prisma/client/extension"

export default class RepositorioPublicacao {
  client = new PrismaClient()

  static async Listar() {
    return await this.db.publicacao.findMany()
  }
  static async salvar() {
    return await this.db.publicacao.upsert({
      where: { id: publicacao.id },
      update: publicacao,
      create: publicacao,
    })
  }
}
