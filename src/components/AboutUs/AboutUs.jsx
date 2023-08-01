import './AboutUs.css';
import image1 from '../../assets/work1.png';
import image2 from '../../assets/work2.png';
import { FiArrowUpRight } from 'react-icons/fi';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__content">
        <h2 className="about-us__title">Sobre nosotros</h2>
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
      </div>
      <div className="about-us__image-column">
        <img src={image1} alt="Imagen 1" className="about-us__image-large" />
        <img src={image2} alt="Imagen 2" className="about-us__image-small" />
      </div>
    </div>
  );
};

export default AboutUs;
