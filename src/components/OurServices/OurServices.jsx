import './OurServices.css';
import icon from '../../assets/iconos/icon.svg';
import icon2 from '../../assets/iconos/icon2.svg';
import icon3 from '../../assets/iconos/icon3.svg';
import icon4 from '../../assets/iconos/icon4.svg';
import icon5 from '../../assets/iconos/icon5.svg';
import icon6 from '../../assets/iconos/icon6.svg';

const OurServices = () => {
    return (
        <div className="services-container">
            <h1>Nuestros servicios</h1>
            <h2>Somos profesionales en servicios eléctricos</h2>
            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <img src={icon} alt="Diseños" />
                    </div>
                    <h3>Diseños</h3>
                    <p>Diseños planos eléctricos, fabricación, montaje y puesta en servicio de tableros de control.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={icon2} alt="Tubería" />
                    </div>
                    <h3>Tubería</h3>
                    <p>Tendido de tubería para puntos de aire comprimido con tubería galvanizada y inoxidable.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={icon3} alt="Mantenimiento" />
                    </div>
                    <h3>Mantenimiento</h3>
                    <p>Mantenimiento de subestaciones, transformadores, tableros y celdas de media tensión.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={icon4} alt="Fabricación" />
                    </div>
                    <h3>Fabricación</h3>
                    <p>Diseño y fabricación de tableros de control para sistemas sala de máquinas control de niveles y bombeo de NH3.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={icon5} alt="Fabricación" />
                    </div>
                    <h3>Fabricación</h3>
                    <p>Fabricación de tableros de potencia para compresores (freón, NH3, co2 marca Frick, sabré, bitzer, potencias de motores hasta 900hp).</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={icon6} alt="Soluciones" />
                    </div>
                    <h3>Soluciones</h3>
                    <p>Detección de fallas eléctricas mantenimiento de motores monofásicos y trifásicos eléctricas.</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
