import React from "react";
import handleCardColor from '../../utils/bgCardColor';
import './style.scss';
import { useNavigate } from 'react-router-dom';

type CardTypeInfo = {
    title: string;
    info: string[];
    icon: any;
}

const CardType: React.FC<CardTypeInfo> = ({ icon, info, title }) => {
    const navigate = useNavigate();
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
                        <div
                            key={type}
                            className={`type ${color}`}
                            onClick={() => navigate(`cards/${type}`)}
                        >
                            <span>{type}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default CardType;