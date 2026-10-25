
import { useState, useEffect } from 'react'
import stories from '../data/stories.json'

function Stories() {
  const [storySelecionado, setStorySelecionado] = useState(null)
  const [indiceMedia, setIndiceMedia] = useState(0)

  useEffect(() => {
    if (!storySelecionado) return

    const temporizador = setTimeout(() => {
      avancarStory()
    }, 5000)

    return () => clearTimeout(temporizador)
  }, [storySelecionado, indiceMedia])


  function avancarStory() {
    if (indiceMedia < storySelecionado.medias.length - 1) {
      setIndiceMedia(indiceMedia + 1)
    } else {
      const indiceStory = stories.findIndex(
        (story) => story.id === storySelecionado.id
      )
      const proximoStory = stories[(indiceStory + 1) % stories.length]

      setStorySelecionado(proximoStory)
      setIndiceMedia(0)
    }
  }

  function voltarStory() {
    if (indiceMedia > 0) {
      setIndiceMedia(indiceMedia - 1)
    } else {
      const indiceStory = stories.findIndex(
        (story) => story.id === storySelecionado.id
      )
      const storyAnterior =
        stories[(indiceStory - 1 + stories.length) % stories.length]

      setStorySelecionado(storyAnterior)
      setIndiceMedia(storyAnterior.medias.length - 1)
    }
  }

  return (
    <section className="stories" aria-label="Stories">
      {stories.map((story) => (
        <button
          className="story"
          key={story.id}
          type="button"
          onClick={() => {
            setStorySelecionado(story)
            setIndiceMedia(0)
          }}
          aria-label={`Abrir Story de ${story.user}`}
        >
          <div className="story__ring">
            <img
              className="story__avatar"
              src={story.avatar}
              alt=""
            />
          </div>

          <span className="story__username">{story.user}</span>
        </button>
      ))}

      {storySelecionado && (
        <div className="story-viewer">
          <button
            className="story-viewer__close"
            type="button"
            onClick={() => setStorySelecionado(null)}
            aria-label="Fechar Story"
          >
            ×
          </button>

          <div className="story-viewer__content">
            <div className="story-viewer__progress">
              {storySelecionado.medias.map((media, index) => (
                <div className="story-viewer__progress-track" key={index}>
                  <div
                    key={`${storySelecionado.id}-${indiceMedia}-${index}`}
                    className={`story-viewer__progress-fill ${index < indiceMedia ? 'story-viewer__progress-fill--active story-viewer__progress-fill--complete' :
                        index === indiceMedia ? 'story-viewer__progress-fill--active' : ''
                      }`}
                  />
                </div>
              ))}
            </div>


            <img
              src={storySelecionado.medias[indiceMedia]}
              alt={`Story de ${storySelecionado.user}`}
              onClick={(evento) => {
                const metade = evento.currentTarget.getBoundingClientRect().left +
                  evento.currentTarget.getBoundingClientRect().width / 2

                if (evento.clientX >= metade) {
                  avancarStory()
                } else {
                  voltarStory()
                }
              }}
              style={{ cursor: 'pointer' }}
            />


            <span>{storySelecionado.user}</span>
          </div>

        </div>
      )}
    </section>
  )
}

export default Stories
