import Menuitem from "../MenuItem"
import { GiHamburgerMenu } from "react-icons/gi"
const Navegacao = () => {
  return (
    <nav>
      <ul className="flex   sm:flex sm:flex-row gap-4    items-center">
        <Menuitem nome="Notícias" endereco="/" />
        <Menuitem nome="Jogos Mobile " endereco="/" />
        <Menuitem nome="Xbox" endereco="/" />
        <Menuitem nome="Playstation" endereco="/" />
        <Menuitem nome="Jogos PC" endereco="/" />
      </ul>
      <GiHamburgerMenu className=" hidden sm:hidden text-textoPrincipal text-xl sm:text-2xl" />
    </nav>
  )
}

export default Navegacao
