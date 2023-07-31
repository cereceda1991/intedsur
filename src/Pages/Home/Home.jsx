import AboutUs from '../../components/AboutUs/AboutUs';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import OurServices from '../../components/OurServices/OurServices';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import Team from '../../components/Team/Team';
import WorkWithUsSection from '../../components/WorkWithUsSection/WorkWithUsSection';
import './Home.css';
import { FiArrowUpRight } from "react-icons/fi";

export const Home = () => {
  return (<>
    <div className="home-container">
      <h1>En INTEDSUR S.A.C estamos listos para ayudarte</h1>
      <p>Somos una empresa joven, dedicada a prestar servicios a proyectos y servicios industriales entregando soluciones tecnológicas destinadas a satisfacer las necesidades de nuestros clientes.</p>
      <button>Nuestros servicios
        <FiArrowUpRight />
      </button>
    </div>
    <OurServices />
    <AboutUs />
    <ServicesSection />
    <ImageSlider />
    <Team />
    <WorkWithUsSection/>
  </>
  );
};
