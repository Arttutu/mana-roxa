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
        <Menuitem nome="Jogos Mobile" endereco="/" />
        <Menuitem nome="Xbox" endereco="/" />
        <Menuitem nome="Playstation" endereco="/" />
        <Menuitem nome="Jogos PC" endereco="/" />
      </ul>
    </nav>
  )
}

export default Navegacao
