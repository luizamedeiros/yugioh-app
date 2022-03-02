import React from "react";
import handleCardColor from '../../utils/bgCardColor';
import './style.scss';

type CardTypeInfo = {
    title: string;
    info: string[];
    icon: any;
}

const CardType: React.FC<CardTypeInfo> = ({ icon, info, title }) => {
    const color = handleCardColor(title);
    return (
        <div className="type-container">
            <div className="type-header">
                <img src={icon} alt="icon" width={50} />
                <h2>{title}</h2>
            </div>
            <div className='type-items'>
                {
                    info.map(type => (
                        <div className={`type ${color}`}>
                            <span>{type}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default CardType;