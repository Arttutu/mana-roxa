import Menuitem from "../MenuItem"
import { motion } from "framer-motion"

const Navegacao = ({ mobile }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ul
        className={`flex ${mobile ? "flex-col" : "flex-row"} gap-4 ${mobile ? "items-start" : "items-center"} ${mobile ? "pt-4" : "pt-0"}`}
      >
        <Menuitem nome="Notícias" endereco="/" />
        <Menuitem nome="RPG" endereco="/" />
        <Menuitem nome="Estratégia" endereco="/" />
      </ul>
    </motion.nav>
  )
}

export default Navegacao
