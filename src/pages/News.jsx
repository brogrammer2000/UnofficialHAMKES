import SectionPage from './SectionPage'
import weatherBoyGif from '../assets/images/news-weather-boy.gif'

/* Latest olds first — live coverage of 1989 is the joke. */
const olds = [
  { tag: 'LIVE', year: '1989', text: 'Berlin Wall comes down overnight — scenes of neighbours reuniting' },
  { tag: 'BREAKING', year: '1969', text: 'Man lands on the Moon, calls it one small step' },
  { tag: 'JUST IN', year: '1912', text: 'Titanic sinks on maiden voyage — iceberg declines to comment' },
  { tag: 'EXCLUSIVE', year: '1440', text: 'Gutenberg prints a book; scribes reportedly furious' },
  { tag: 'DEVELOPING', year: '476 AD', text: 'Rome falls — more on this as the situation develops' },
  { tag: 'ALERT', year: '79 AD', text: 'Vesuvius erupts; Pompeii residents advised to stay indoors' },
  { tag: 'UPDATE', year: '3500 BC', text: 'Wheel invented — experts say it could go places' },
]

/* The intro asks; the clip answers; the olds deliver anyway. */
function News() {
  return (
    <SectionPage section="news" cardClassName="section-page__card--news">
      <p className="news__intro">Any news?</p>
      <img
        className="news__gif"
        src={weatherBoyGif}
        alt="A kid being interviewed on the news, answering: Wouldn't you like to know, Weather Boy?"
        draggable={false}
      />
      <p className="news__olds-lead">I don’t have NEWS but I have OLDS</p>
      <ul className="news__olds">
        {olds.map((item) => (
          <li key={item.year}>
            <span
              className={`news__tag${item.tag === 'LIVE' ? ' news__tag--live' : ''}`}
            >
              {item.tag}
            </span>
            <span className="news__year">{item.year}</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </SectionPage>
  )
}

export default News
