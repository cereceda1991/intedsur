import "./ServicesSection.css";

import serviceImage from "../../assets/services/image.png";
import icon1 from "../../assets/services/icon.svg";
import icon2 from "../../assets/services/icon2.svg";
import icon3 from "../../assets/services/icon3.svg";
import icon4 from "../../assets/services/icon4.svg";

const serviceCardsData = [
  {
    icon: icon1,
    title: "Eficiencia y Ahorro",
    description:
      "Nuestras soluciones en automatización y control industrial te ayudarán a mejorar la eficiencia de tus procesos y reducir costos operativos.",
  },
  {
    icon: icon2,
    title: "Profesionalismo y Experiencia",
    description:
      "Nuestro equipo altamente capacitado y experimentado garantiza un servicio de alta calidad y resultados exitosos en cada proyecto.",
  },
  {
    icon: icon3,
    title: "Confianza y Tranquilidad    ",
    description:
      "Nuestra ética de trabajo, responsabilidad y compromiso con el éxito del cliente te brindarán confianza y tranquilidad en cada etapa de tu proyecto.",
  },
  {
    icon: icon4,
    title: "Soluciones a Medida",
    description:
      "Nuestra ética de trabajo, responsabilidad y compromiso con el éxito del cliente te brindarán confianza y tranquilidad en cada etapa de tu proyecto.",
  },
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      <section className="services-section__header">
        <h1>
          ¡Potencia tu proyecto industrial hoy mismo!
        </h1>
        <p>
          Descubre cómo nuestra amplia trayectoria nos respalda en el sector.
        </p>
      </section>
      <section className="services-section-divisor">
        <div className="services-section__info">
          <img src={serviceImage} alt="Nuestros servicios" />
        </div>
        <div className="services-section__cards">
          {serviceCardsData.map((card, index) => (
            <div className="service-card" key={index}>
              <img src={card.icon} alt={`Icono ${index + 1}`} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
