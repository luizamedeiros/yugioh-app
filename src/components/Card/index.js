import './style.scss';

const Card = ({name, attribute, cardImage}) => {
    return (
        <div className='card-item'>
            <img
                alt={name}
                src={cardImage}
            />
            <span className='center bold'>{name}</span>
            <span className='center'>Attribute: {attribute}</span>
        </div>
    )
}

export default Card;