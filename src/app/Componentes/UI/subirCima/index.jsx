"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaArrowUp } from "react-icons/fa" // Ícone de seta para cima

const SubirCima = () => {
  const [mostrarBotao, setMostrarBotao] = useState(false)

  // Verifica a posição da página para mostrar ou esconder o botão
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setMostrarBotao(true)
      } else {
        setMostrarBotao(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Função para rolar a página para o topo
  const subirAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rola suavemente
    })
  }

  return (
    <>
      {mostrarBotao && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={subirAoTopo}
            className="p-2 bg-destaque text-white rounded-full shadow-lg hover:bg-destaque/90 transition-all flex items-center justify-center"
          >
            <FaArrowUp className="text-2xl" />
          </motion.button>
        </motion.div>
      )}
    </>
  )
}

export default SubirCima
