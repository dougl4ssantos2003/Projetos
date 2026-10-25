
import { FiInstagram } from 'react-icons/fi'

function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__icon">
          <a
            href="http://localhost:5173/"
            target="_blank"
            rel="noopener noreferrer"
            className="header__icon"
            aria-label="Visitar meu site"
          >
            <FiInstagram />
          </a>
        </div>

        <span className="header__logo">Gossiping</span>
      </div>
    </header>
  )
}

export default Header
