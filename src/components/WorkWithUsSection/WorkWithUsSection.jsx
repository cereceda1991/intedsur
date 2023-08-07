import { Link } from 'react-router-dom';
import './WorkWithUsSection.css';

const WorkWithUsSection = () => {

  const handleContactClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
      <div className="work-with-us">
        <section className='section_work'>
        <h1 className="work-with-us__title">¿Necesitas asesoramiento técnico? Nuestro equipo de expertos está listo para ayudarte.</h1>
        <Link to='/contactanos' onClick={handleContactClick}>
          <button className="work-with-us__button">
            ¡Contáctanos ahora!
          </button>
          </Link>
        </section>
      </div >     
  );
};

export default WorkWithUsSection;
