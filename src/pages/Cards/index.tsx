import { useEffect, useState } from 'react';
import api from '../../services/axios';
import Card from '../../components/Card';
import { useParams } from 'react-router-dom';

type ICard = {
  id: string;
  name_en: string;
  attribute: string;
  card_images: Array<CardImage>;
}
type CardImage = {
  id: string;
  image_url: string;
  image_url_small: string;
}

const Cards = () => {
  const params = useParams();
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    api.get(`cards?race=${params.type}`)
      .then((response) => {
        setCards(response.data);
        console.log("cards:", cards)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <>
    <h2 className='container title'>{params.type} cards</h2>
      <div className='container cards'>
        {cards.map((card) =>
          <Card
            key={card.id}
            card={card}
          />
        )}
      </div>
    </>
  );
}

export default Cards;
