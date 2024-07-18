import db from "../../../../../../prisma/db"

export async function GET(_request, { params }) {
  const resposta = await db.comentario.findMany({
    where: {
      paiId: parseInt(params.id),
    },
    include: {
      author: true,
    },
  })
  return Response.json(resposta)
}
