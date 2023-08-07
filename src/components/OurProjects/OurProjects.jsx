import './OurProjects.css';
import proyecto1 from '../../assets/proyectos/project1.png';
import proyecto2 from '../../assets/proyectos/project2.png';
import proyecto3 from '../../assets/proyectos/project3.png';
import proyecto4 from '../../assets/proyectos/project4.png';
import proyecto5 from '../../assets/proyectos/project5.png';

const proyectoImages = [
  proyecto1,
  proyecto2,
  proyecto3,
  proyecto4,
  proyecto5,
];

const OurProjects = () => {

  return (
    <div className="slider-container">
      <h1>Proyectos personalizados, resultados impresionantes</h1>
      <p>En cada proyecto que emprendemos, nos enfocamos en brindar soluciones personalizadas que se adapten a las necesidades específicas de nuestros clientes, logrando resultados impresionantes y satisfactorios.
      </p>
      <div className="slider_projects"> 
      {proyectoImages.map((image, index) => (
        <div key={index} >
          <img src={image} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
        </div>
    </div>
  );
};

export default OurProjects;
