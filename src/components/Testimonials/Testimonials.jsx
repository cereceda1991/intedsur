import './Testimonials.css';
import { BiSolidStar } from 'react-icons/bi';


const testimonialsData = [
    {
        testimonial:
            '“Estamos muy satisfechos con el excelente servicio de mantenimiento eléctrico proporcionado por INTEDSUR. Su equipo resolvió rápidamente cualquier problema y nos ayudó a mantener nuestras operaciones sin interrupciones.”',
        author: 'Sandra T. Robinson',
        stars: 5,
    },
    {
        testimonial:
            '“Los especialistas de INTEDSUR instalaron un sistema eléctrico completo en nuestro nuevo edificio comercial. Su profesionalismo y calidad de trabajo nos dejaron impresionados.”',
        author: 'Juan Pérez',
        stars: 5,
    },
    {
        testimonial:
            '“Contratamos a INTEDSUR para realizar un diseño eléctrico detallado para nuestra planta industrial. Cumplieron con todos nuestros requisitos y recomendaciones, superando nuestras expectativas.”',
        author: 'María García',
        stars: 5,
    },
    {
        testimonial:
            '“INTEDSUR nos brindó soluciones rápidas y eficientes para resolver problemas eléctricos inesperados en nuestra fábrica. Su equipo altamente capacitado nos salvó de largas interrupciones de producción.”',
        author: 'Luis Fernández',
        stars: 5,
    },
    {
        testimonial:
            '“Gracias a INTEDSUR, ahora contamos con un sistema eléctrico más seguro y eficiente en nuestra empresa. La instalación de sus tableros de control nos ha permitido optimizar nuestras operaciones.”',
        author: 'Ana Rodríguez',
        stars: 4,
    },
    {
        testimonial:
            '“El servicio de mantenimiento eléctrico de INTEDSUR ha sido fundamental para asegurar que nuestras instalaciones estén en perfecto estado. Los recomendamos ampliamente.”',
        author: 'Carlos Pérez',
        stars: 5,
    },
];


const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2 className="testimonials__title">Lo que dicen nuestros clientes</h2>
            <div className="testimonials__cards">
                {testimonialsData.map((testimonial, index) => (
                    <div className="testimonials__card" key={index}>
                        <p className="testimonials__card-text">{testimonial.testimonial}</p>
                        <div className="testimonials__card-author">
                            <p className="testimonials__card-author-name">{testimonial.author}</p>
                            <div className="testimonials__card-stars">
                                {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                                    <BiSolidStar key={starIndex} className="testimonials__card-star-icon" />
                                ))}
                                <span className="testimonials__card-rating">{testimonial.stars}.0</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
