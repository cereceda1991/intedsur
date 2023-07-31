import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import proyecto1 from '../../assets/proyectos/proyecto1.png';
import proyecto2 from '../../assets/proyectos/proyecto2.png';
import proyecto3 from '../../assets/proyectos/proyecto3.png';
import proyecto4 from '../../assets/proyectos/proyecto4.png';
import proyecto5 from '../../assets/proyectos/proyecto5.png';
import proyecto6 from '../../assets/proyectos/proyecto6.png';
import proyecto7 from '../../assets/proyectos/proyecto7.png';
import proyecto8 from '../../assets/proyectos/proyecto8.png';

const proyectoImages = [
  proyecto1,
  proyecto2,
  proyecto3,
  proyecto4,
  proyecto5,
  proyecto6,
  proyecto7,
  proyecto8,
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <div className="slider-container">
      <h2>Nuestros proyectos</h2>
      <Slider {...settings}>
        {proyectoImages.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
