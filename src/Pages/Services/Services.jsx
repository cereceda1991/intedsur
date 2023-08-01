import OurPartners from "../../components/OurPartners/OurPartners"
import OurServices from "../../components/OurServices/OurServices"
import Testimonials from "../../components/Testimonials/Testimonials"
import WorkWithUsSection from "../../components/WorkWithUsSection/WorkWithUsSection"

const Services = () => {
  return (
    <>
      <div className="about__container">
        <h1>Nuestros servicios</h1>
      </div>
      <OurServices />
      <OurPartners/>
      <WorkWithUsSection />
      <Testimonials/>
    </>
  )
}

export default Services
