import React from "react"
export default function Avatar({ autor, avatar }) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <h1 className="text-textoPrincipal underline  font-font2 text-sm sm:text-md">
        @{autor}
      </h1>
    </div>
  )
}
