import './AboutUs.css';
import { FiArrowUpRight } from 'react-icons/fi';
import electricIcon from '../../assets/iconos/electric.svg';
import workImage1 from '../../assets/work1.png';
import workImage2 from '../../assets/work2.png';

const AboutUs = () => {
  return (
    <div className="about-us">
        <section className="about-us__image-column">
        <img src={workImage1} alt="Imagen 1" className="about-us__image-large" />
        <img src={workImage2} alt="Imagen 2" className="about-us__image-small" />
      </section>
      <section className="about-us__content">
        <h2 className="about-us__title">
          <img src={electricIcon} alt="electric" />
          Sobre nosotros
          <img src={electricIcon} alt="electric" />
        </h2>
        <p className="about-us__subtitle">Tu servicio eléctrico de confianza para siempre</p>
        <p className="about-us__description">
          Nuestra empresa está conformada por un grupo de profesionales con una amplia experiencia en el ámbito industrial, lo que nos brinda un importante respaldo para abordar cualquier proyecto o servicio que nos sea encomendado.
        </p>
        <ul className="about-us__list">
          <li className="about-us__list-item">✔ Reparaciones</li>
          <li className="about-us__list-item">✔ Nuevas instalaciones</li>
          <li className="about-us__list-item">✔ Diseño y construcción</li>
          <li className="about-us__list-item">✔ Soluciones rápidas</li>
        </ul>
        <p className="about-us__additional-text">Satisfacemos prácticamente cualquier necesidad eléctrica, ¡solo pregunte!</p>
        <button className="about-us__button">Conocer más <FiArrowUpRight /></button>
      </section>

    
    </div>
  );
};

export default AboutUs;
