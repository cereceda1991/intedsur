import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactCards.css";

const ContactCards = () => {
    return (
        <div className="contact-cards">
            <div className="contact-card">
                <div className="contact-card__icon">
                    <FaPhone />
                </div>
                <div className="contact-card__content">
                    <h3 className="contact-card__title">Llámanos</h3>
                    <p className="contact-card__subtitle">+51 992 829 173</p>
                </div>
            </div>
            <div className="contact-card">
                <div className="contact-card__icon">
                    <FaEnvelope />
                </div>
                <div className="contact-card__content">
                    <h3 className="contact-card__title">Correo</h3>
                    <a
                        href="mailto:intedsur.peru@gmail.com"
                        className="contact-card__subtitle"
                    >
                        intedsur.peru@gmail.com
                    </a>
                </div>
            </div>
            <div className="contact-card">
                <div className="contact-card__icon">
                    <FaMapMarkerAlt />
                </div>
                <div className="contact-card__content">
                    <h3 className="contact-card__title">Ubicación</h3>
                    <p className="contact-card__subtitle">
                        Mz F Lt 16 Flores de Villa-San Juan de Miraflores
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactCards;
