import { useState } from 'react'
import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi'

function Post({ post }) {
  const [curtido, setCurtido] = useState(false)
  const [curtidas, setCurtidas] = useState(post.likes)
  const [comentario, setComentario] = useState('')
  const [comentarios, setComentarios] = useState([])
  const [salvo, setSalvo] = useState(false)
  return (
    <article className="post">
      <header className="post__header">
        <img className="post__avatar" src={post.avatar} alt={`Foto de ${post.user}`} />
        <div className="post__user"><strong>{post.user}</strong>
          <span>{post.location}</span>
          <span>{post.music}</span>
        </div>
        <button className="icon-button post__more" type="button" aria-label="Mais opções">
          <FiMoreHorizontal />
        </button>
      </header>

      <img className="post__image" src={post.image} alt={post.alt} />

      <div className="post__content">

        <div className="post__actions">

          <button
            className="icon-button"
            type="button"
            aria-label={curtido ? 'Descurtir' : 'Curtir'}
            onClick={() => {
              setCurtido(!curtido)
              setCurtidas(curtido ? curtidas - 1 : curtidas + 1)
            }}
            style={{ color: curtido ? '#e1306c' : undefined }}
          >
            <FiHeart fill={curtido ? '#e1306c' : 'none'} />
          </button>

          <button className="icon-button" type="button" aria-label="Comentar">
            <FiMessageCircle />
          </button>
          <button className="icon-button" type="button" aria-label="Enviar">
            <FiSend /></button>

          <button
            className="icon-button"
            type="button"
            aria-label={salvo ? 'Remover dos salvos' : 'Salvar'}
            onClick={() => setSalvo(!salvo)}
            style={{ color: salvo ? '#9333ea' : undefined }}
          >
            <FiBookmark fill={salvo ? '#9333ea' : 'none'} />
          </button>

        </div>

        <p className="post__likes">
          <strong>{curtidas.toLocaleString('pt-BR')}</strong> curtidas
        </p>

        <p className="post__caption"><strong>{post.user}</strong>{post.caption}</p>


        <div className="post__comments">
          {comentarios.map((item, index) => (
            <p key={index} className="post__comment">
              <strong>Você</strong> {item}
            </p>
          ))}

          <form
            className="post__comment-form"
            onSubmit={(e) => {
              e.preventDefault()

              if (comentario.trim() === '') return

              setComentarios([...comentarios, comentario.trim()])
              setComentario('')
            }}
          >
            <input
              type="text"
              placeholder="Adicione um comentário..."
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              aria-label="Escreva um comentário"
            />

            <button type="submit" disabled={!comentario.trim()}>
              Publicar
            </button>
          </form>
        </div>

      </div>
    </article>
  )
}

export default Post
