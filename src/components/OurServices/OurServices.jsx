import './OurServices.css';
import icon from '../../assets/iconos/icon.svg';
import icon2 from '../../assets/iconos/icon2.svg';
import icon3 from '../../assets/iconos/icon3.svg';
import icon4 from '../../assets/iconos/icon4.svg';
import icon5 from '../../assets/iconos/icon5.svg';
import icon6 from '../../assets/iconos/icon6.svg';

const servicesData = [
    {
        icon: icon,
        title: 'Diseños',
        description: 'Diseños planos eléctricos, fabricación, montaje y puesta en servicio de tableros de control.',
    },
    {
        icon: icon2,
        title: 'Tubería',
        description: 'Tendido de tubería para puntos de aire comprimido con tubería galvanizada y inoxidable.',
    },
    {
        icon: icon3,
        title: 'Mantenimiento',
        description: 'Mantenimiento de subestaciones, transformadores, tableros y celdas de media tensión.',
    },
    {
        icon: icon4,
        title: 'Fabricación',
        description: 'Diseño y fabricación de tableros de control para sistemas sala de máquinas control de niveles y bombeo de NH3.',
    },
    {
        icon: icon5,
        title: 'Fabricación',
        description: 'Fabricación de tableros de potencia para compresores (freón, NH3, co2 marca Frick, sabré, bitzer, potencias de motores hasta 900hp).',
    },
    {
        icon: icon6,
        title: 'Soluciones',
        description: 'Detección de fallas eléctricas mantenimiento de motores monofásicos y trifásicos eléctricas.',
    },
];

const OurServices = () => {
    return (
        <div className="services" id='services'>
            <div className="services__title">
                <h2 >
                    Somos profesionales en
                    <span>servicios eléctricos</span>
                </h2>
            </div>
            <div className="services__cards">
                {servicesData.map((service, index) => (
                    <div className="services__card" key={index}>
                        <div className="services__card-icon">
                            <img src={service.icon} alt={service.title} />
                        </div>
                        <h3 className="services__card-title">{service.title}</h3>
                        <p className="services__card-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
