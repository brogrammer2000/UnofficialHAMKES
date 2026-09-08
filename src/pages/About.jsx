import qrCode from '../assets/images/mobilepay-qr.png'
import SectionPage from './SectionPage'

/* About reuses the section shell — same background video, same glass panel —
   and fills the panel with credits instead of leaving it title-only. */
function About() {
  return (
    <SectionPage section="about" cardClassName="section-page__card--about">
      <div className="about__body">
        <p>Developed based on Veronika&rsquo;s Figma design</p>
        <p>The amazing tech implementation is done by Satyam</p>
        <p>
          Donations for appreciating this work are available by MobilePay.
          Please use this QR
        </p>
      </div>
      <img
        className="about__qr"
        src={qrCode}
        alt="MobilePay QR code for donations"
        draggable={false}
      />
    </SectionPage>
  )
}

export default About
