import icon_check from '../../assets/iconos/check.svg';
import icon_account from '../../assets/iconos/account-outline.svg';
import icon_world from '../../assets/iconos/bx-world.svg';
import icon_happy from '../../assets/iconos/emoticon-happy.svg';

import "./CompanyTimeline.css";

const timelineData = [
    {
        icon: icon_check,
        count: "100+",
        label: "Clientes felices",
    },
    {
        icon: icon_account,
        count: "200+",
        label: "Trabajos exitosos",
    },
    {
        icon: icon_world,
        count: "6",
        label: "Perú",
    },
    {
        icon: icon_happy,
        count: "95%",
        label: "Satisfacción del cliente",
    },
];

const CompanyTimeline = () => {
    return (
        <div className="container_timeline">
            {timelineData.map((item, index) => (
                <div className="timeline-item" key={index}>
                    <div className="timeline-item__content">
                        <div className="timeline-item__icon">
                            <img src={item.icon} alt={item.icon}/>
                        </div>
                        <p className="timeline-item__count">{item.count}</p>
                        <p className="timeline-item__label">{item.label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CompanyTimeline;