import  { useRef } from 'react'; 
import './Home.css';
import WorkWithUsSection from '../../components/WorkWithUsSection/WorkWithUsSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import OurServices from '../../components/OurServices/OurServices';
import ContactUs from '../../components/ContactUs/ContactUs ';
import AboutUs from '../../components/AboutUs/AboutUs';
import { FiArrowRight } from 'react-icons/fi';
import OurProjects from '../../components/OurProjects/OurProjects';
import CompanyTimeline from '../../components/CompanyTimeline/CompanyTimeline';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import ContactCards from '../../components/ContactCards/ContactCards';

export const Home = () => {
  const servicesRef = useRef(null); 
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="home_container">
        <section className='info_home'>
        <h1>En INTEDSUR S.A.C</h1>
        <h1> estamos listos para ayudarte</h1>
        <p>
        Somos una empresa dedicada a prestar servicios industriales y brindar soluciones tecnológicas que satisfacen las necesidades de nuestros clientes. Con experiencia en proyectos y servicios especializados, estamos comprometidos con la excelencia en cada paso del camino.
        </p>
        <button onClick={scrollToServices}>
        Conoce nuestros servicios <FiArrowRight />
          </button>
          </section>
      </div>
      <div ref={servicesRef}>
      <OurServices />
      </div>
      <AboutUs />
      <OurProjects />
      <CompanyTimeline />
      <ServicesSection/>
      <WorkWithUsSection />
      <ContactCards/>
      <ContactUs />
      <Testimonials />
    </>
  );
};
