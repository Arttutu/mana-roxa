import Menuitem from "../MenuItem"
import { GiHamburgerMenu } from "react-icons/gi"

const Navegacao = ({ mobile }) => {
  return (
    <nav>
      {/* Container principal */}
      <ul
        className={`flex ${mobile ? "flex-col" : "flex-row"} gap-4 items-center`}
      >
        <Menuitem nome="Notícias" endereco="/" />
        <Menuitem nome="RPG" endereco="/" />
        <Menuitem nome="Estratégia" endereco="/" />
      </ul>
    </nav>
  )
}

export default Navegacao
