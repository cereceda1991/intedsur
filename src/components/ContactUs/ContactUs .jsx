import { useForm } from 'react-hook-form';
import './ContactUs.css';
import image1 from '../../assets/contactus/image1.webp';
import image2 from '../../assets/contactus/image2.webp'


const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="contact-us" id='contact-us-section'>
            <div className="contact-us__form-container">
                <h2 className="contact-us__title">Formulario de contacto</h2>
                <p className="contact-us__description">
                    Envíanos todas tus preguntas rellenando el formulario y uno de nuestros expertos se pondrá en contacto contigo lo más pronto posible.
                </p>
                <form className="contact-us__form" onSubmit={handleSubmit(onSubmit)}>
                <div className='container_two-inputs'>
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
                    </div>
                    <div className='container_two-inputs'>
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
            <div className="contact-us__imgs-container">
                <img src={image1} alt='image1' className='contact-us__image1' />
                <img src={image2} alt='image2' className='contact-us__image2'/>
            </div>
        </div>
    );
};

export default ContactUs;
