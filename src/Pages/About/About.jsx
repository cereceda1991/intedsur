import AboutUs from "../../components/AboutUs/AboutUs"
import CompanyTimeline from "../../components/CompanyTimeline/CompanyTimeline"
import Team from "../../components/Team/Team"
import WorkWithUsSection from "../../components/WorkWithUsSection/WorkWithUsSection"
import './About.css'

const About = () => {
  return (
    <>
      <div className="about__container">
        <h1>Sobre nosotros</h1>
      </div>
      <AboutUs />
      <CompanyTimeline />
      <WorkWithUsSection />
      <Team />

    </>
  )
}

export default About
