
const stories = [
  { id: 1, user: 'Você', avatar: '/images/perfil/Face.jpeg' },
  { id: 2, user: 'marina.codes', avatar: '/images/perfil/Face (3).jpeg' },
  { id: 3, user: 'leo.nomundo', avatar: '/images/perfil/Face (2).jpeg' },
  { id: 4, user: 'bia.criativa', avatar: '/images/perfil/Face (4).jpeg' },,
  { id: 6, user: 'viajante', avatar: '/images/perfil/Face (1).jpeg' },
]

function Stories() {
  return (
    <section className="stories" aria-label="Stories">
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <div className="story__ring">
            <img
              className="story__avatar"
              src={story.avatar}
              alt={`Foto de ${story.user}`}
            />
          </div>
          <span className="story__username">{story.user}</span>
        </div>
      ))}
    </section>
  )
}

export default Stories
