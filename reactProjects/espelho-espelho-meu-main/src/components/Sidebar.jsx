
import {
  FiHome,
  FiSearch,
  FiCompass,
  FiMessageCircle,
  FiHeart,
  FiPlusSquare,
  FiUser,
} from 'react-icons/fi'

const menuItems = [
  { label: 'Início', icon: FiHome },
  { label: 'Pesquisar', icon: FiSearch },
  { label: 'Explorar', icon: FiCompass },
  { label: 'Mensagens', icon: FiMessageCircle },
  { label: 'Notificações', icon: FiHeart },
  { label: 'Criar', icon: FiPlusSquare },
  { label: 'Perfil', icon: FiUser },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar__logo">GossipVibe</h1>

      <nav className="sidebar__menu" aria-label="Menu principal">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <button
              className={`sidebar__item ${item.label === 'Início' ? 'sidebar__item--active' : ''}`}
              type="button"
              key={item.label}
            >
              <Icon />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
