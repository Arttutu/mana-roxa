"use client"
import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaHome } from "react-icons/fa"

const VoltarInicio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-10 right-8 z-50"
    >
      <Link href="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-destaque text-white rounded-full shadow-lg hover:bg-destaque/90 transition-all flex items-center justify-center"
        >
          <FaHome className="text-2xl" />
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default VoltarInicio
