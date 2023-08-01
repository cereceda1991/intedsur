import './ServicesSection.css';

import serviceImage from '../../assets/services/image.png';
import icon1 from '../../assets/services/icon.svg';
import icon2 from '../../assets/services/icon2.svg';
import icon3 from '../../assets/services/icon3.svg';
import icon4 from '../../assets/services/icon4.svg';

const serviceCardsData = [
    {
        icon: icon1,
        title: 'Precio asequible',
        description: 'Ofrecemos precios competitivos para nuestros servicios, manteniendo la calidad sin comprometer tu presupuesto.',
    },
    {
        icon: icon2,
        title: 'Disponibilidad 24/7',
        description: 'Estamos disponibles las 24 horas del día, los 7 días de la semana, para atender tus necesidades eléctricas en cualquier momento.',
    },
    {
        icon: icon3,
        title: 'Planeación',
        description: 'Planificamos cada proyecto eléctrico con precisión y eficiencia, asegurándonos de cumplir con tus expectativas y requisitos.',
    },
    {
        icon: icon4,
        title: 'Consulta gratuita',
        description: 'Ofrecemos consultas gratuitas para entender tus necesidades y recomendarte las mejores soluciones eléctricas.',
    },
];

const ServicesSection = () => {
    return (
        <div className="services-section">
            <div className="services-section__cards">
                {serviceCardsData.map((card, index) => (
                    <div className="service-card" key={index}>
                        <img src={card.icon} alt={`Icono ${index + 1}`} />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <div className="services-section__info">
                <h2>Nuestros servicios</h2>
                <p>Nuestro equipo de profesionales altamente capacitados está comprometido en ofrecer resultados excepcionales en cada proyecto que emprendemos.</p>
                <img src={serviceImage} alt="Nuestros servicios" />
            </div>
        </div>
    );
};

export default ServicesSection;
