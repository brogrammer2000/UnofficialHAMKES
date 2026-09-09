import SectionPage from './SectionPage'
import weatherBoyGif from '../assets/images/news-weather-boy.gif'

/* The intro asks; the clip answers. */
function News() {
  return (
    <SectionPage section="news">
      <p className="news__intro">Any news?</p>
      <img
        className="news__gif"
        src={weatherBoyGif}
        alt="A kid being interviewed on the news, answering: Wouldn't you like to know, Weather Boy?"
        draggable={false}
      />
    </SectionPage>
  )
}

export default News
