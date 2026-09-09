import SectionPage from './SectionPage'
import shrekGif from '../assets/images/services-shrek.gif'

function Services() {
  return (
    <SectionPage section="services">
      <p className="services__intro">What services are you looking for??</p>
      <img
        className="services__gif"
        src={shrekGif}
        alt="Shrek taking a slow, gracious bow"
        draggable={false}
      />
    </SectionPage>
  )
}

export default Services
