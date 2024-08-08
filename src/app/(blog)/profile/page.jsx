import { getServerSession } from "next-auth"
import ProfileImageUploader from "../../Componentes/ProfileImageUploader/index.jsx"
import { options } from "../../api/auth/[...nextauth]/options"
import db from "../../../../prisma/db.js"
import { redirect } from "next/navigation.js"

export default async function Profile() {
  const session = await getServerSession(options)
  if (!session || !session.user) {
    redirect("/api/auth/signin?callbackUrl=/profile")
  }
  const user = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
  })
  return (
    <section className="flex flex-col items-center justify-start gap-4 ">
      <h1 className="text-textoPrincipal text-4xl ">Perfil</h1>
      <ProfileImageUploader user={user} />
    </section>
  )
}
