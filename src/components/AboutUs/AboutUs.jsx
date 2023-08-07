import './AboutUs.css';
import workImage1 from '../../assets/work1.webp';
import workImage2 from '../../assets/work2.webp';
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
          Experiencia y profesionalismo en el ámbito industrial
        </h2>
        <p className="about-us__description">
          Nuestra misión en INTEDSUR S.A.C es ser líderes en la industria, brindando <b>soluciones integrales y servicios especializados </b>de alta calidad en las áreas de Eléctrica, Electromecánica, Automatización, Neumática y refrigeración industrial.<br></br>
          Nos comprometemos a satisfacer plenamente las necesidades de nuestros clientes, ofreciendo excelencia técnica, innovación y adaptabilidad para contribuir al éxito y crecimiento de sus proyectos.
        </p>
        <ul className="about-us__list">
          <li className="about-us__list-item">Eficiencia energética</li>
          <li className="about-us__list-item">Experiencia comprobada</li>
          <li className="about-us__list-item">Soluciones personalizadas</li>
          <li className="about-us__list-item">Servicio especializado</li>
        </ul>
        <Link to='contactanos' onClick={handleContactClick}>
          <button className="about-us__button">
            Únete a nuestros clientes satisfechos ¡llámanos!
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
