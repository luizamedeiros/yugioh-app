import React from "react";
import handleCardColor from '../../utils/bgCardColor';
import './style.scss';

type CardTypeInfo = {
    title: string;
    info: string[];
}

const CardType: React.FC<CardTypeInfo> = ({title, info}) => {
    const color = handleCardColor(title);
    return (
        <div className="type-container">
            <h2>{title}</h2>
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