import './AboutUs.css';
import { FiArrowRight } from 'react-icons/fi';
import shield_icon from '../../assets/iconos/icon_shield.svg';
import workImage1 from '../../assets/work1.webp';
import workImage2 from '../../assets/work2.png';
import { Link } from 'react-router-dom';

const AboutUs = () => { 
  const handleContactClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="about-us">
      <section className="about-us__images">
        <img src={workImage1} alt="Imagen 1" className="about-us__image-large" />
        <img src={workImage2} alt="Imagen 2" className="about-us__image-small" />
      </section>
      <section className="about-us__content">
        <h2 className="about-us__title">
        Tu servicio eléctrico de confianza por siempre
        </h2>
        <p className="about-us__description">
        El pilar fundamental es del grupo de profesionales que forman parte de esta empresa, los cuales, cumplen con una amplia experiencia en el ámbito industrial, logrando así, un importante respaldo para abordar cualquier proyecto o servicio que sea encomendado.
        </p>
        <ul className="about-us__list">
          <li className="about-us__list-item">Reparaciones</li>
          <li className="about-us__list-item">Nuevas instalaciones</li>
          <li className="about-us__list-item">Diseño y construcción</li>
          <li className="about-us__list-item">Soluciones rápidas</li>
        </ul>
        <p className="about-us__additional-text">
        <img src={shield_icon} alt="shield_icon" />
          Estamos preparados para abordar cualquier necesidad eléctrica.¡No dudes en preguntarnos!</p>
        <Link to='contactanos' onClick={handleContactClick}>
        <button className="about-us__button">
        ¡Contáctanos! <FiArrowRight />
        </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
