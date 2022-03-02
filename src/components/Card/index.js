import './style.css';

const Card = ({name, attribute, cardImage}) => {
    return (
        <div className='card-item'>
            <img
                width={140}
                alt={name}
                src={cardImage}
            />
            <span>{name}</span>
            <span>Attribute: {attribute}</span>
        </div>
    )
}

export default Card;