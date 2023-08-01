import React from "react";
import { FaSmile, FaBriefcase, FaGlobeAmericas, FaMedal } from "react-icons/fa";
import "./CompanyTimeline.css";

const timelineData = [
    {
        icon: FaSmile,
        count: "100+",
        label: "Clientes felices",
    },
    {
        icon: FaBriefcase,
        count: "200+",
        label: "Trabajos exitosos",
    },
    {
        icon: FaGlobeAmericas,
        count: "1",
        label: "País",
    },
    {
        icon: FaMedal,
        count: "95%",
        label: "Satisfacción del cliente",
    },
];

const CompanyTimeline = () => {
    return (
        <div className="timeline">
            {timelineData.map((item, index) => (
                <div className="timeline-item" key={index}>
                    <div className="timeline-item__content">
                        <div className="timeline-item__icon">
                            {React.createElement(item.icon)}
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
