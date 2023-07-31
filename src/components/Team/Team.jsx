import './Team.css';
import { BiSolidShareAlt } from 'react-icons/bi';
import electricista1 from '../../assets/electricistas/electricista1.png';
import electricista2 from '../../assets/electricistas/electricista2.png';
import electricista3 from '../../assets/electricistas/electricista3.png';

const Team = () => {
    const teamData = [
        {
            foto: electricista1,
            nombre: 'Juan Pérez',
            tecnico: 'Electricista Residencial',
            contacto: 'juan.perez@example.com',
        },
        {
            foto: electricista2,
            nombre: 'María López',
            tecnico: 'Electricista Comercial',
            contacto: 'maria.lopez@example.com',
        },
        {
            foto: electricista3,
            nombre: 'Pedro Ramírez',
            tecnico: 'Electricista Industrial',
            contacto: 'pedro.ramirez@example.com',
        },
    ];

    return (
        <div className="team__container">
            <h1 className="team__title">Equipo</h1>
            <p className="team__description">Nuestro equipo de electricistas expertos y profesionales</p>
            <div className="team__cards">
                {teamData.map((miembro, index) => (
                    <div key={index} className="team__card">
                        <img className="team__card-img" src={miembro.foto} alt={`Foto de ${miembro.nombre}`} />
                        <h3 className="team__card-name">{miembro.nombre}</h3>
                        <p className="team__card-tecnico">{miembro.tecnico}</p>
                        <a href={`mailto:${miembro.contacto}`} className="team__card-contact">
                            Contactar | <BiSolidShareAlt />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
