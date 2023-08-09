import CompanyTimeline from "../../components/CompanyTimeline/CompanyTimeline"
import InfoAbout from "../../components/InfoAbout/InfoAbout"
import MissionVision from "../../components/MissionVision/MissionVision"
import Team from "../../components/Team/Team"
import './About.css'

const About = () => {
  return (
    <>
      <div className="about__container">
        <h1>Sobre nosotros</h1>
      </div>
      <InfoAbout />
      <MissionVision/>
      <CompanyTimeline />
      <Team />

    </>
  )
}

export default About
