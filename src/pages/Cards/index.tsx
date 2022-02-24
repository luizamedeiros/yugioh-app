import { useEffect, useState } from 'react';
import api from '../../services/axios';
import Card from '../../components/Card';

type ICard = {
  id: string;
  name: string;
  attribute: string;
  card_images: Array<CardImage>;
}
type CardImage = {
  id: string;
  image_url: string;
  image_url_small: string;
}

const Cards = () => {

  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    api.get('cards?_limit=32')
      .then((response) => {
        setCards(response.data);
        console.log("cards:", cards)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div className='container cards'>
      {cards.map((card) =>
        <Card
          key={card.id}
          name={card.name}
          attribute={card.attribute}
          cardImage={card.card_images[0].image_url_small}
        />
      )}
    </div>
  );
}

export default Cards;
