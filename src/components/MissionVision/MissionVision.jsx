import './MissionVision.css';
import MissionImage1 from '../../assets/MissionVision/image1.png';
import MissionImage2 from '../../assets/MissionVision/image2.png';

const MissionVision = () => {
    const sections = [
        {
            id: 1,
            title: "Nuestra Misión",
            content: "En INTEDSUR S.A.C nos proponemos ser líderes en la industria, brindando soluciones integrales y servicios especializados de alta calidad en las áreas de Eléctrica, Electromecánica, Automatización, Neumática y refrigeración industrial. Nos comprometemos a satisfacer plenamente las necesidades de nuestros clientes, ofreciendo excelencia técnica, innovación y adaptabilidad para contribuir al éxito y crecimiento de sus proyectos.",
            image: MissionImage1,
            imagePosition: "right"
        },
        {
            id: 2,
            title: "Nuestra Visión",
            content: "Consolidarnos como referentes en el mercado industrial, reconocidos por nuestra experiencia, profesionalismo y compromiso con la excelencia. Aspiramos a expandir nuestra presencia a nivel nacional e internacional, siendo la opción preferida de nuestros clientes al brindar soluciones eficientes y sostenibles que contribuyan al desarrollo de la industria y mejoren la calidad de vida de la sociedad en general.",
            image: MissionImage2,
            imagePosition: "left"
        }
    ];

    return (
        <section className="mission-vision">
            {sections.map((section) => (
                <section key={section.id} className={`mission-section ${section.imagePosition === 'left' ? 'reverse' : ''}`}>
                    <div className='mission-content-wrapper'>
                        <h1 className="mission-title">{section.title}</h1>
                        <p className="mission-content">{section.content}</p>
                    </div>
                    <img className="mission-image" src={section.image} alt={`Image ${section.image}`} />
                </section>
            ))}
        </section>
    );
};

export default MissionVision;
