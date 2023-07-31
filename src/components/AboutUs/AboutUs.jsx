import './AboutUs.css';
import image1 from '../../assets/work1.png';
import image2 from '../../assets/work2.png';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>Sobre nosotros</h2>
        <p>Tu servicio eléctrico de confianza para siempre</p>
        <p>
          Nuestra empresa está conformada por un grupo de profesionales con una amplia experiencia en el ámbito industrial, lo que nos brinda un importante respaldo para abordar cualquier proyecto o servicio que nos sea encomendado.
        </p>
        <ul>
          <li>✔ Reparaciones</li>
          <li>✔ Nuevas instalaciones</li>
          <li>✔ Diseño y construcción</li>
          <li>✔ Soluciones rápidas</li>
          <li>✔ Satisfacemos prácticamente cualquier necesidad eléctrica, ¡solo pregunte!</li>
        </ul>
        <button>Conocer más</button>
      </div>
      <div className="image-column">
        <img src={image1} alt="Imagen 1" className="image-large" />
        <img src={image2} alt="Imagen 2" className="image-small" />
      </div>
    </div>
  );
};

export default AboutUs;
