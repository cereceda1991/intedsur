import PropTypes from 'prop-types';
import './OurServices.css';

const OurServices = ({ servicesData }) => {

    return (
        <div className="services">            
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

OurServices.propTypes = {
    servicesData: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default OurServices;
