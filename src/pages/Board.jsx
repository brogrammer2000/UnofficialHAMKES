import SectionPage from './SectionPage'
import catTyping from '../assets/images/cat-typing.gif'
import catRolling from '../assets/images/cat-rolling.gif'
import catSleepyPaws from '../assets/images/cat-sleepy-paws.gif'

const clips = [
  { src: catTyping, alt: 'A black cat typing away on a laptop' },
  { src: catRolling, alt: 'A white cat rolling upside down on the floor' },
  { src: catSleepyPaws, alt: 'A kitten dozing off with its paws in the air' },
]

function Board() {
  return (
    <SectionPage section="board" cardClassName="section-page__card--board">
      <div className="board__intro">
        <p className="board__lead">Bored?</p>
        <p>Here are some funny cat clips</p>
      </div>
      <div className="board__clips">
        {clips.map((clip) => (
          <img key={clip.src} src={clip.src} alt={clip.alt} draggable={false} />
        ))}
      </div>
    </SectionPage>
  )
}

export default Board
