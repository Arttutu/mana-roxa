"use client"
import Image from "next/image"
import React, { useState } from "react"
import avatarPadrao from "./avatarPadrao.jpg"
export default function ProfileImageUploader({ user }) {
  const [imgSrc, setImgSrc] = useState(
    user.avatar ?? user.image ?? avatarPadrao
  )
  const [newAvatar, setNewAvatar] = useState(null)
  const FileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setNewAvatar(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImgSrc(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  const uploadAvatar = (event) => {
    event.preventDefault()
    fetch("api/profile", {
      method: "POST",
      body: newAvatar,
    })
  }
  if (!user) {
    return null
  }

  return (
    <section className="flex flex-col gap-12 ">
      <ul className="flex flex-col gap-4 list-none">
        <li className="text-destaque font-bold text-xl">@{user.name}</li>
        <li className="text-textoPrincipal font-bold text-xl">{user.email}</li>

        <li className="w-[]">
          <Image
            src={imgSrc}
            width={254}
            height={254}
            alt={`imagem de perfil do ${user.name}`}
            className=" border-destaque border-2 rounded-lg "
          />
        </li>
      </ul>
      <form onSubmit={uploadAvatar}>
        <input
          type="file"
          required
          onChange={FileChange}
          className=" text-textoPrincipal cursor-pointer"
        />

        <button
          type="submit"
          className="bg-botao rounded-lg p-2 w-42 text-textoPrincipal text-sm sm:text-md gap-2"
        >
          Upload
        </button>
      </form>
    </section>
  )
}
