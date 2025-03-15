import { PrismicRichText } from "@prismicio/react"
import Link from "next/link"

const UltimosPost = ({ post }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h2 className="flex gap-2 items-center uppercase text-md text-textoPrincipal font-title">
            Últimos
          </h2>
          <h2 className="flex gap-2 items-center uppercase text-md text-destaque font-title">
            Post
          </h2>
        </div>
        <div className="w-12 h-[2px] bg-destaque" />
      </div>

      {post.map((post) => (
        <ul key={post.uid}>
          <Link href={`/Posters/${post.uid}`}>
            <li className="font-text text-textoPrincipal text-sm hover:text-destaque hover:duration-300 hover:ease-in">
              <PrismicRichText field={post.data.titulo} />
            </li>
          </Link>
        </ul>
      ))}
    </div>
  )
}

export default UltimosPost
