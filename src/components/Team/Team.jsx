import './Team.css';
import electricista1 from '../../assets/electricistas/electricista1.webp';
import electricista2 from '../../assets/electricistas/electricista2.webp';
import electricista3 from '../../assets/electricistas/electricista3.webp';
import icon_email from '../../assets/iconos/icon_email.svg'
import icon_linkedin from '../../assets/iconos/linkedin.svg'

const Team = () => {
    const teamData = [
        {
            foto: electricista1,
            nombre: 'Juan Pérez',
            tecnico: 'Electricista Residencial',
            contacto: 'juan.perez@example.com',
            linkedin: ''
        },
        {
            foto: electricista2,
            nombre: 'Francisco López',
            tecnico: 'Electricista Comercial',
            contacto: 'francisco.lopez@example.com',
            linkedin: ''
        },
        {
            foto: electricista3,
            nombre: 'Pedro Ramírez',
            tecnico: 'Electricista Industrial',
            contacto: 'pedro.ramirez@example.com',
            linkedin: ''
        },
    ];

    return (
        <div className="team__container">
            <h1 className="team__title">Descubre las mentes creativas detrás de nuestras soluciones a medida</h1>
            <div className="team__cards">
                {teamData.map((miembro, index) => (
                    <div key={index} className="team__card">
                        <img className="team__card-img" src={miembro.foto} alt={`Foto de ${miembro.nombre}`} />
                        <h1 className="team__card-name">{miembro.nombre}</h1>
                        <p className="team__card-tecnico">{miembro.tecnico}</p>
                        <div className="team__card-contact">
                            <a href={`mailto:${miembro.contacto}`} >
                                <img src={icon_email} alt='icon_email' />
                            </a>
                            <a href={miembro.linkedin}>
                                <img src={icon_linkedin} alt='icon_linkedin' />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
                <h1 className='team__sub-title'> ¡Bienvenidos a nuestra comunidad industrial!</h1>
        </div>
    );
};

export default Team;
