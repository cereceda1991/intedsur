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
        title: 'Diseño y montaje de tableros eléctricos',
        description: 'Planos eléctricos, fabricación y montaje de tableros de control, puesta en servicio de tableros control.',
    },
    {
        icon: icon2,
        title: 'Instalaciones eléctricas',
        description: 'Tableros de distribución, cableado y remodelaciones industriales y residenciales, iluminación urbana, rural e industrial.',
    },
    {
        icon: icon3,
        title: 'Mantenimiento de equipos',
        description: 'Subestaciones y transformadores, tableros y celdas de media tensión, compresores hasta 900HP, evaporadores y condensadores.',
    },
    {
        icon: icon4,
        title: 'Servicio de Mantenimiento Industrial',
        description: 'Reparaciones y modificaciones de máquinas de proceso continuo, túneles estáticos, aire acondicionado, tendido de tuberías y pozos a tierra.',
    },
    {
        icon: icon5,
        title: 'Tableros de Control Especializados',
        description: 'Para sistemas de sala de máquinas, cámaras de refrigeración, y túneles de congelamiento.',
    },
    {
        icon: icon6,
        title: 'Automatización y Control Industrial',
        description: 'Programación y puesta en marcha de sistemas de control (PLC, Variadores de Frecuencia, arrancadores suaves), aplicado en sistemas de bombeo.',
    },
];

const OurServices = () => {
    return (
        <div className="services" id='services'>
            <div className="services__title">
                <h2 >
                    Soluciones a la Medida de tu Industria
                </h2>
                <p>
                    Conoce nuestros servicios especializados para cada tipo de proyecto
                </p>
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
