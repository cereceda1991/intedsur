import { useRef } from "react";
import "./Home.css";
import WorkWithUsSection from "../../components/WorkWithUsSection/WorkWithUsSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import OurServices from "../../components/OurServices/OurServices";
import ContactUs from "../../components/ContactUs/ContactUs ";
import AboutUs from "../../components/AboutUs/AboutUs";
import { FiArrowRight } from "react-icons/fi";
import OurProjects from "../../components/OurProjects/OurProjects";
import CompanyTimeline from "../../components/CompanyTimeline/CompanyTimeline";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import ContactCards from "../../components/ContactCards/ContactCards";

import icon from "../../assets/iconos/icon.svg";
import icon2 from "../../assets/iconos/icon2.svg";
import icon3 from "../../assets/iconos/icon3.svg";
import icon4 from "../../assets/iconos/icon4.svg";
import icon5 from "../../assets/iconos/icon5.svg";
import icon6 from "../../assets/iconos/icon6.svg";

const servicesData = [
  {
    icon: icon,
    title: "Diseño y montaje de tableros eléctricos",
    description:
      "Planos eléctricos, fabricación y montaje de tableros de control, puesta en servicio de tableros control.",
  },
  {
    icon: icon2,
    title: "Instalaciones eléctricas",
    description:
      "Tableros de distribución, cableado y remodelaciones industriales y residenciales, iluminación urbana, rural e industrial.",
  },
  {
    icon: icon3,
    title: "Mantenimiento de equipos",
    description:
      "Subestaciones y transformadores, tableros y celdas de media tensión, compresores hasta 900HP, evaporadores y condensadores.",
  },
  {
    icon: icon4,
    title: "Servicio de Mantenimiento Industrial",
    description:
      "Reparaciones y modificaciones de máquinas de proceso continuo, túneles estáticos, aire acondicionado, tendido de tuberías y pozos a tierra.",
  },
  {
    icon: icon5,
    title: "Tableros de Control Especializados",
    description:
      "Para sistemas de sala de máquinas, cámaras de refrigeración, y túneles de congelamiento.",
  },
  {
    icon: icon6,
    title: "Automatización y Control Industrial",
    description:
      "Programación y puesta en marcha de sistemas de control (PLC, Variadores de Frecuencia, arrancadores suaves), aplicado en sistemas de bombeo.",
  },
];

const Home = () => {
  const servicesRef = useRef(null);
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="home_container">
        <section className="info_home">
          <h1>En INTEDSUR S.A.C</h1>
          <h1>estamos listos para ayudarte</h1>
          <p>
            Somos una empresa dedicada a prestar servicios industriales y
            brindar soluciones tecnológicas que satisfacen las necesidades de
            nuestros clientes. Con experiencia en proyectos y servicios
            especializados, estamos comprometidos con la excelencia en cada paso
            del camino.
          </p>
          <button onClick={scrollToServices}>
            Conoce nuestros servicios <FiArrowRight />
          </button>
        </section>
      </div>
      <div ref={servicesRef}>
        <div className="service_container">
          <h1>Soluciones a la Medida de tu Industria </h1>
          <p>
            Conoce nuestros servicios especializados para cada tipo de proyecto
          </p>
        </div>
        <OurServices servicesData={servicesData} />
      </div>
      <AboutUs />
      <OurProjects />
      <CompanyTimeline />
      <ServicesSection />
      <WorkWithUsSection />
      <ContactCards />
      <ContactUs />
      <Testimonials backgroundColor="#d9d9d9" />
    </>
  );
};

export default Home;
