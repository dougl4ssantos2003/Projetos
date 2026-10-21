import { FiHeart, FiHome, FiPlusSquare, FiSearch } from 'react-icons/fi'
import { SocialIcon } from 'react-social-icons'
import  'react-social-icons/instagram' 


function Header() {
  return (
    <header className="header">
      <SocialIcon  borderRadius = "5px" url='www.instagram.com'/>
      <span className="header__logo">Gossiping</span>
      <nav className="header__actions" aria-label="Navegação principal">
        <button className="icon-button" type="button" aria-label="Início">
          <FiHome />
        </button>
        <button className="icon-button" type="button" aria-label="Pesquisar">
          <FiSearch />
        </button>
        <button className="icon-button" type="button" aria-label="Criar publicação">
          <FiPlusSquare />
        </button>
        <button className="icon-button" type="button" aria-label="Atividades">
          <FiHeart />
        </button>
      </nav>
    </header>
  )
}

export default Header
