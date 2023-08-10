import proyectoData from '../../utils/proyectoData';
import './OurProjects.css';

const OurProjects = () => {
  return (
    <div className="slider-container">
      <h1>Proyectos personalizados, resultados impresionantes</h1>
      <p>En cada proyecto que emprendemos, nos enfocamos en brindar soluciones personalizadas que se adapten a las necesidades específicas de nuestros clientes, logrando resultados impresionantes y satisfactorios.</p>
      <div className="slider_projects">
        {proyectoData.map((proyecto, index) => (
          <div key={index} className="project-card">
            <img src={proyecto.image} alt={`Imagen ${index + 1}`} />
            <p className="project-caption">{proyecto.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
