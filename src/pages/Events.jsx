import SectionPage from './SectionPage'

const entries = [
  'Nothing eventful is happening in my life rn, yknow',
  'I’m sitting on my recliner at 2:38 in the night making this gag website just because i like my work but who am I if you take away my work, hobbies, interests, likes and dislikes, love languages, desires, etc',
  'Am I a good person? I’d like to think so but the past says otherwise',
  'Commitment Issues? I don’t have commitment issues! I’m great at making commitments! It’s the following through on those commitments I have trouble with',
  'Red flags? But they do say that when you look at someone through rose-colored glasses, all the red flags just look like flags.',
  'Could it be that last time the same thing happened that always happens. You didn’t know me and then you fell in love with me. And now you know me.',
  'You are all the things that are wrong with you',
  'Sometimes I feel like I was born with a leak, and any goodness I started with just slowly spilled out of me, and now it’s all gone.',
  'I’m responsible for my own happiness? I can’t even be responsible for my own breakfast!',
  'Every day it gets a little easier. But you gotta do it every day. That’s the hard part. But it does get easier.',
]

/* Set as a numbered log rather than centred prose: these run long, and a
   left-aligned measure with a rule between entries actually reads — plus a
   list of non-events is the joke on an events page. */
function Events() {
  return (
    <SectionPage section="events" cardClassName="section-page__card--events">
      <ol className="events__log">
        {entries.map((entry, i) => (
          <li key={entry}>
            <span className="events__index" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p>{entry}</p>
          </li>
        ))}
      </ol>
    </SectionPage>
  )
}

export default Events
