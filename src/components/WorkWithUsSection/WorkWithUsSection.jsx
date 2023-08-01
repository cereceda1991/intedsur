import './WorkWithUsSection.css';
import { FiArrowUpRight } from 'react-icons/fi';

const WorkWithUsSection = () => {
  return (
    <div className="work-with-us">
      <h1 className="work-with-us__title">Si quieres trabajar con nosotros, contacta con nuestro equipo de expertos</h1>
      <button className="work-with-us__button">
      Contáctanos ahora <FiArrowUpRight />
      </button>
    </div>
  );
};

export default WorkWithUsSection;
