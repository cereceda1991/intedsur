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
                    <h3 className="contact-card__title">Llamanos</h3>
                    <p className="contact-card__subtitle">992 829 173</p>
                </div>
            </div>
            <div className="contact-card">
                <div className="contact-card__icon">
                    <FaEnvelope />
                </div>
                <div className="contact-card__content">
                    <h3 className="contact-card__title">Correo</h3>
                    <p className="contact-card__subtitle">intedsur.peru@gmail.com</p>
                </div>
            </div>
            <div className="contact-card">
                <div className="contact-card__icon">
                    <FaMapMarkerAlt />
                </div>
                <div className="contact-card__content">
                    <h3 className="contact-card__title">Ubicación</h3>
                    <p className="contact-card__subtitle">Mz F Lt 16 flores de villa san juan de Miraflores</p>
                </div>
            </div>
        </div>
    );
};

export default ContactCards;
