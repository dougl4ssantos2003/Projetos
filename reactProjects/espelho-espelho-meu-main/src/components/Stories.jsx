
const stories = [
  { id: 1, user: 'Você', avatar: '/images/avatars/ana.jpg' },
  { id: 2, user: 'marina.codes', avatar: '/images/avatars/ana.jpg' },
  { id: 3, user: 'leo.nomundo', avatar: '/images/avatars/viajante.jpg' },
  { id: 4, user: 'bia.criativa', avatar: '/images/avatars/cafe.jpg' },
  { id: 5, user: 'ana.dev', avatar: '/images/avatars/ana.jpg' },
  { id: 6, user: 'viajante', avatar: '/images/avatars/viajante.jpg' },
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
