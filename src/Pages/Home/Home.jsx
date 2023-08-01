import  { useRef } from 'react'; 
import './Home.css';
import WorkWithUsSection from '../../components/WorkWithUsSection/WorkWithUsSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactCards from '../../components/ContactCards/ContactCards';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import OurServices from '../../components/OurServices/OurServices';
import ContactUs from '../../components/ContactUs/ContactUs ';
import AboutUs from '../../components/AboutUs/AboutUs';
import Team from '../../components/Team/Team';
import { FiArrowUpRight } from 'react-icons/fi';

export const Home = () => {
  const servicesRef = useRef(null); 
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="home-container">
        <h1>En INTEDSUR S.A.C estamos listos para ayudarte</h1>
        <p>
          Somos una empresa joven, dedicada a prestar servicios a proyectos y servicios industriales entregando soluciones tecnológicas destinadas a satisfacer las necesidades de nuestros clientes.
        </p>
        <button onClick={scrollToServices}>
          Nuestros servicios <FiArrowUpRight />
        </button>
      </div>
      <div ref={servicesRef}>
      <OurServices />
      </div>
      <AboutUs />
      <ServicesSection />
      <ImageSlider />
      <Team />
      <WorkWithUsSection />
      <Testimonials />
      <ContactUs />
      <ContactCards/>
    </>
  );
};
