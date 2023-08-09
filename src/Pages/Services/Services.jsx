import OurPartners from "../../components/OurPartners/OurPartners"
import OurServices from "../../components/OurServices/OurServices"
import Testimonials from "../../components/Testimonials/Testimonials"
import './Services.css'

import icon from '../../assets/ourservices/icon1.svg';
import icon2 from '../../assets/ourservices/icon2.svg';
import icon3 from '../../assets/ourservices/icon3.svg';
import icon4 from '../../assets/ourservices/icon4.svg';
import icon5 from '../../assets/ourservices/icon5.svg';
import icon6 from '../../assets/ourservices/icon6.svg';
import icon7 from '../../assets/ourservices/icon7.svg';
import icon8 from '../../assets/ourservices/icon8.svg';
import icon9 from '../../assets/ourservices/icon9.svg';

const Services = () => {
  const servicesData = [
    {
      icon: icon,
      title: 'Automatización y Control Industrial',
      description: 'Programación y puesta en marcha de sistemas de control (PLC, Variadores de Frecuencia, arrancadores suaves), aplicado en sistemas de bombeo. Aplicado en sistemas de bombeo NH3, CO2, GLICOL, AGUA.',
    },
    {
      icon: icon2,
      title: 'Instalaciones eléctricas',
      description: 'Tableros de distribución. Cableado y remodelaciones industriales y residenciales. Instalación de bandejas PVC, metal e inoxidable. Iluminación urbana, rural e industrial.',
    },
    {
      icon: icon3,
      title: 'Diseño y montaje de tableros eléctricos',
      description: 'Planos eléctricos. Fabricación y montaje de tableros de control. Puesta en servicio de tableros control.',
    },
    {
      icon: icon4,
      title: 'Mantenimiento de equipos',
      description: 'Subestaciones y transformadores. Tableros y celdas de media tensión. Compresores de freón, NH3, CO2  hasta 900HP. Evaporadores y condensadores y torres de enfriamiento.',
    },
    {
      icon: icon5,
      title: 'Mantenimiento de Bombas de Agua',
      description: 'Centrífugas, de presión, sumergibles, desplazamiento positivo, etc.',
    },
    {
      icon: icon6,
      title: 'Servicio de Mantenimiento Industrial',
      description: 'Reparaciones y modificaciones de máquinas de proceso continuo, túneles estáticos y cámaras frigoríficas. Fajas transportadoras y aire acondicionado',
    },
    {
      icon: icon7,
      title: 'Pozos a Tierra y Tendido de Tuberías',
      description: 'Mantenimiento y construcción de pozos a tierra. Agua (PVC, galvanizada, inoxidable). Aire comprimido (galvanizada, inoxidable).',
    },
    {
      icon: icon8,
      title: 'Tableros de Control Especializados',
      description: 'Para sistemas de sala de máquinas - control de niveles y bombeo de NH3. Para cámaras de refrigeración (freón, NH3, CO2). Para túneles de congelamiento (NH3, CO2).',
    },
    {
      icon: icon9,
      title: 'Tableros de Control Especializados',
      description: 'Mantenimiento y programación de puertas automáticas seccionales.',
    },
  ];
  return (
    <>
      <div className="about__container">
        <h1 className="">Nuestros servicios</h1>
      </div>
      <div className="service_title">
        <p>En nuestra empresa estamos en la capacidad de desarrollar con éxito diversos escenarios, tales como:</p>
      </div>
      <OurServices
        servicesData={servicesData}
      />
      <OurPartners />
      <Testimonials
        backgroundColor="#FEFEFE"
      />
    </>
  )
}

export default Services
