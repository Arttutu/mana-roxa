import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"

const BotaoMenu = ({ handleMenu, openMenu }) => {
  return (
    <button className="text-destaque text-4xl" onClick={handleMenu}>
      {openMenu ? (
        <MdClose className="text-destaque text-xl sm:text-2xl" />
      ) : (
        <GiHamburgerMenu className="text-destaque text-xl sm:text-2xl" />
      )}
    </button>
  )
}

export default BotaoMenu
