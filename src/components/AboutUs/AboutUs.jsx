import './AboutUs.css';
import { FiArrowUpRight } from 'react-icons/fi';
import electricIcon from '../../assets/iconos/electric.svg';
import workImage1 from '../../assets/work1.webp';
import workImage2 from '../../assets/work2.png';
import { useRef } from 'react';

const AboutUs = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about-us">
      <section className="about-us__image-column">
        <img src={workImage1} alt="Imagen 1" className="about-us__image-large" />
        <img src={workImage2} alt="Imagen 2" className="about-us__image-small" />
      </section>
      <section className="about-us__content">
        <h2 className="about-us__title">
          <img src={electricIcon} alt="electric" />
          Tu Socio Confiable en Servicios Eléctricos
          <img src={electricIcon} alt="electric" />
        </h2>
        <p className="about-us__description">
          En nuestra empresa, nos enorgullece presentar un equipo de profesionales con amplia experiencia en el ámbito industrial. Este respaldo nos capacita para enfrentar con éxito cualquier proyecto o servicio que se nos encomiende.
        </p>
        <ul className="about-us__list">
          <li className="about-us__list-item">Reparaciones</li>
          <li className="about-us__list-item">Nuevas instalaciones</li>
          <li className="about-us__list-item">Diseño y construcción</li>
          <li className="about-us__list-item">Soluciones rápidas</li>
        </ul>
        <p className="about-us__additional-text">Estamos preparados para abordar cualquier necesidad eléctrica. ¡No dudes en preguntarnos!</p>
        <button className="about-us__button" onClick={scrollToServices}>
          Descubre más <FiArrowUpRight />
        </button>
      </section>
      {/* Agregar la referencia a la sección de servicios */}
      <div ref={servicesRef} />
    </div>
  );
};

export default AboutUs;
