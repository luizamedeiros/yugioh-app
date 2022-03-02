import './style.scss';

const Card = ({ name, attribute, cardImage }) => {
    return (
        <div className='card-item'>
            <abbr title={name}>
                <img
                    alt={name}
                    src={cardImage}
                />
            </abbr>
            <span className='center bold'>{name}</span>
            <span className='center'>{attribute ? `Attribute: ${attribute.charAt(0).toUpperCase() + attribute.slice(1).toLowerCase()}` : null}</span>
        </div>
    )
}

export default Card;