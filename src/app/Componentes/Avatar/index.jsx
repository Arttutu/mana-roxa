import Image from "next/image"
import React from "react"
import avatar from "../../../../public/assets/img/autor/logo_avatar.jpeg"
export default function Avatar({ autor, urlImg }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <h1 className="text-textoPrincipal  font-font2 text-sm sm:text-md">
        @{autor}
      </h1>
      <Image
        src={avatar}
        height={85}
        width={85}
        alt="avatar"
        className="rounded-full h-12 w-12"
      />
    </div>
  )
}
