import { Link } from 'react-router-dom';
import ContactCards from '../ContactCards/ContactCards';
import './WorkWithUsSection.css';

const WorkWithUsSection = () => {

  const handleContactClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
      <div className="work-with-us">
        <section className='section_work'>
        <h1 className="work-with-us__title">Si quieres trabajar con nosotros, contacta a nuestro equipo de expertos</h1>
        <Link to='/contactanos' onClick={handleContactClick}>
          <button className="work-with-us__button">
            ¡Contactanos ahora!
          </button>
          </Link>
        </section>
        <div className='contact_cards'>
        <ContactCards />
      </div>
      </div >     
  );
};

export default WorkWithUsSection;
