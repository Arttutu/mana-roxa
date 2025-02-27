import React from "react"
import { createClient } from "@prismicio/client"
import { PrismicImage, PrismicRichText } from "@prismicio/react"

export default async function Poster({ params }) {
  const client = createClient("mana-roxa", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })
  const post = await client.getByUID("post", params.uid)

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-start justify-start  gap-8 py-16">
        <h1 className="text-2xl text-left text-destaque uppercase ">
          <PrismicRichText field={post.data.titulo} />
        </h1>
        <div className=" w-full  sm:w-[400px] md:w-[600px]">
          <PrismicImage field={post.data.banner} className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
