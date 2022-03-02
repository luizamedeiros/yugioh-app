import { useNavigate } from 'react-router-dom';
import './style.scss';
interface Props {
    card: any;
}
const Card: React.FC<Props> = ({ card }: Props) => {

    const navigate = useNavigate();
    return (
        <div
            className='card-item'
            onClick={
                () => navigate(`/card-details`, {state: card})
            }>
            <abbr title={card.name_en}>
                <img
                    alt={card.name_en}
                    className='card-image'
                    src={card.card_images[0].image_url}
                />
            </abbr>
            <span className='center bold'>{card.name_en}</span>
            <span className='center'>
                {card.attribute ?
                    `Attribute: ${card.attribute.charAt(0).toUpperCase()
                    + card.attribute.slice(1).toLowerCase()}`
                    : null}
            </span>
        </div>
    )
}

export default Card;