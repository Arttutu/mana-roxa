import Image from "next/image"
import React from "react"
export default function Avatar({ autor, avatar }) {
  return (
    <div className="flex flex-row gap-4 items-center">
      {/*       <Image
        src={avatar}
        height={85}
        width={85}
        alt="avatar"
        className="rounded-full h-12 w-12"
      /> */}
      <h1 className="text-textoPrincipal underline  font-font2 text-sm sm:text-md">
        @{autor}
      </h1>
    </div>
  )
}
