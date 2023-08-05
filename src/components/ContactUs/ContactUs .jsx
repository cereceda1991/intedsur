import { useForm } from 'react-hook-form';
import './ContactUs.css';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="contact-us" id='contact-us-section'>
            <div className="contact-us__form-container">
                <h2 className="contact-us__title">Contáctanos</h2>
                <p className="contact-us__description">
                    Envíanos todas tus preguntas rellenando el formulario y uno de nuestros expertos se pondrá en contacto contigo lo más pronto posible.
                </p>
                <form className="contact-us__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="contact-us__form-row">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span>Este campo es requerido</span>}
                    </div>
                    <div className="contact-us__form-row">
                        <label htmlFor="company">Compañía</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            {...register('company', { required: true })}
                        />
                        {errors.company && <span>Este campo es requerido</span>}
                    </div>
                    <div className="contact-us__form-row">
                        <label htmlFor="email">Correo</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && <span>Ingresa un correo válido</span>}
                    </div>
                    <div className="contact-us__form-row">
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            {...register('phone', { required: true })}
                        />
                        {errors.phone && <span>Este campo es requerido</span>}
                    </div>
                    <div className='contact-us__form-row'>
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            {...register('message', { required: true })}
                        ></textarea>
                        {errors.message && <span>Este campo es requerido</span>}
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className="contact-us__map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.854302714024!2d-76.97911508381367!3d-12.190315323113621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9c2ad365909%3A0xe04031bec06d4d86!2sFlores%20de%20Villa%2C%20San%20Juan%20de%20Miraflores!5e0!3m2!1ses-419!2spe!4v1690832533928!5m2!1ses-419!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;
