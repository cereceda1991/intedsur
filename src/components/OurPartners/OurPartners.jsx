import { useRef, useEffect } from "react";
import "./OurPartners.css";

import image1 from '../../assets/brands/1.png'
import image3 from '../../assets/brands/3.png'
import image2 from '../../assets/brands/2.png'
import image4 from '../../assets/brands/4.png'
import image5 from '../../assets/brands/5.png'
import image6 from '../../assets/brands/6.png'
import image7 from '../../assets/brands/7.png'
import image8 from '../../assets/brands/8.png'
import image9 from '../../assets/brands/9.png'
import image10 from '../../assets/brands/10.png'

const brandData =
    [
        {
            "id": 1,
            "image": image1
        },
        {
            "id": 2,
            "image": image2
        },
        {
            "id": 3,
            "image": image3
        },
        {
            "id": 4,
            "image": image4
        },
        {
            "id": 5,
            "image": image5
        },
        {
            "id": 6,
            "image": image6
        },
        {
            "id": 7,
            "image": image7
        },
        {
            "id": 8,
            "image": image8
        },
        {
            "id": 9,
            "image": image9
        },
        {
            "id": 10,
            "image": image10
        }
    ];

const OurPartners = () => {
    const partnersContainerRef = useRef(null);

    useEffect(() => {
        const partnersContainer = partnersContainerRef.current;

        const intervalId = setInterval(() => {
            partnersContainer.scrollTo({
                left: partnersContainer.scrollLeft + 1, 
                behavior: "smooth",
            });
        }, 20);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="partners-container" ref={partnersContainerRef}>
            <h2>Nuestros aliados</h2>
            <div className="partner-logos">
                {brandData.map((logo, index) => (
                    <div key={index} className="partner-card">
                        <img src={logo.image} alt={`Logo ${index + 1}`} />
                        <h3>{logo.name}</h3>
                    </div>
                ))}
                {brandData.map((logo, index) => (
                    <div key={index + brandData.length} className="partner-card">
                        <img src={logo.image} alt={`Logo ${index + 1}`} />
                        <h3>{logo.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurPartners;