"use client"

import { useRouter } from "next/navigation"

export default function Pagination({ currentPage, totalPages }) {
  const router = useRouter()

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      router.push(`?page=${newPage}`)
    }
  }

  return (
    <div className="flex items-center justify-center mt-24 space-x-4">
      <button
        className={`px-4 py-2 bg-gray-700 text-white  font-text rounded ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      <span className="text-lg font-semibold">
        Página {currentPage} de {totalPages}
      </span>

      <button
        className={`px-4 py-2 bg-gray-700  font-text text-white rounded ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próxima
      </button>
    </div>
  )
}
