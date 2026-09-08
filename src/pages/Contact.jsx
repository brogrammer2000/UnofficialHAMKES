import SectionPage from './SectionPage'

/* Same section shell as About — background video, glass panel — with the
   panel carrying the copy instead of standing title-only. */
function Contact() {
  return (
    <SectionPage section="contact">
      <blockquote className="contact__lyrics">
        <p>
          You used to call me on my cell phone
          <br />
          Late-night when you need my love
          <br />
          Call me on my cell phone
          <br />
          Late-night when you need, my love
        </p>
        <p>
          I know when that hotline bling
          <br />
          That can only mean one thing
          <br />
          I know when that hotline bling
          <br />
          That can only mean one thing
        </p>
      </blockquote>
    </SectionPage>
  )
}

export default Contact
