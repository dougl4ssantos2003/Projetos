import { FiHeart, FiHome, FiPlusSquare, FiSearch, FiUser } from 'react-icons/fi'
import Header from './components/Header'
import Post from './components/Post'
import Stories from './components/Stories'
import Sidebar from './components/Sidebar'
import posts from './data/posts.json'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="instagram-layout">
          <Sidebar />
        <main className="feed" aria-label="Feed de publicações">
          <Stories />
          {posts.map((post) => <Post key={post.id} post={post} />)}
        </main>
      </div>
      <nav className="mobile-nav" aria-label="Navegação móvel">
        <button className="icon-button" type="button" aria-label="Início"><FiHome /></button>
        <button className="icon-button" type="button" aria-label="Pesquisar"><FiSearch /></button>
        <button className="icon-button" type="button" aria-label="Criar publicação"><FiPlusSquare /></button>
        <button className="icon-button" type="button" aria-label="Atividades"><FiHeart /></button>
        <button className="icon-button" type="button" aria-label="Perfil"><FiUser /></button>
      </nav>
    </div>
  )
}

export default App
