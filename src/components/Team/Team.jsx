import './Team.css';
import electricista1 from '../../assets/electricistas/electricista1.webp';
import electricista2 from '../../assets/electricistas/electricista2.webp';
import electricista3 from '../../assets/electricistas/electricista3.webp';
import icon_email from '../../assets/iconos/icon_email.svg'

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
            nombre: 'Francisco López',
            tecnico: 'Electricista Comercial',
            contacto: 'francisco.lopez@example.com',
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
            <h1 className="team__title">Electricidad, mecánica y automatización industrial.</h1>
            <p className="team__description">
                Conoce a nuestro equipo de electricistas
                expertos y profesionales</p>
            <div className="team__cards">
                {teamData.map((miembro, index) => (
                    <div key={index} className="team__card">
                        <img className="team__card-img" src={miembro.foto} alt={`Foto de ${miembro.nombre}`} />
                        <h3 className="team__card-name">{miembro.nombre}</h3>
                        <p className="team__card-tecnico">{miembro.tecnico}</p>
                        <a href={`mailto:${miembro.contacto}`} className="team__card-contact">
                            Enviar un mail
                            <img src={icon_email} alt='icon_email' />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
