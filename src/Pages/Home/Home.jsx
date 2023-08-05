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
import { FiArrowRight } from 'react-icons/fi';

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
        Somas una empresa dedicada a prestar servicios a proyectos y servicios industriales entregando soluciones tecnológicas destinadas a satisfacer las necesidades de nuestros clientes.
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
      <ServicesSection />
      <ImageSlider />
      <Team />
      <WorkWithUsSection />
      <Testimonials />
      {/* <ContactUs /> */}
      <ContactCards/>
    </>
  );
};
