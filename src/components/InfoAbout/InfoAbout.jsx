import logo from '../../assets/logo2.png'
import './InfoAbout.css'

const InfoAbout = () => {
    return (
        <div className="info-container">
            <section className='info_divider'>
                <div className="info-content">
                    <p>
                        Bienvenidos a INTEDSUR S.A.C, una empresa líder en el sector industrial que inició sus operaciones en el año 2020. Nuestro éxito se basa en un equipo de profesionales altamente capacitados y con amplia experiencia en el ámbito industrial, lo que nos proporciona un sólido respaldo para enfrentar cualquier tipo de proyecto o servicio que nuestros clientes necesiten.
                    </p>
                    <p>
                        Nuestra misión es satisfacer plenamente las necesidades de nuestros clientes, brindando soluciones integrales a través de servicios especializados en proyectos, reparaciones y mantenimientos industriales. Inspirados en estos principios, nos esforzamos por mantenernos siempre a la vanguardia y ser una empresa moderna que se adapta a las exigencias cambiantes del mercado.
                    </p>
                </div>
                <div className="info-image">
                    <img src={logo} alt="logo" />
                    <h1>INTEDSUR S.A.C</h1>
                </div>
            </section>
            <div className="info-slogan">
                <p>
                    Innovación y Tecnología para tu Éxito Industrial
                </p>
            </div>
        </div>
    );
};

export default InfoAbout;
