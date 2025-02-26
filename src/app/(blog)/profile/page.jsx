import ProfileImageUploader from "../../Componentes/ProfileImageUploader/index.jsx"

export default async function Profile() {
  return (
    <section className="flex flex-col items-center justify-start gap-4 ">
      <h1 className="text-textoPrincipal text-4xl ">Perfil</h1>
      <ProfileImageUploader user={user} />
    </section>
  )
}
