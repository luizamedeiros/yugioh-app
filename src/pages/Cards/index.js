import { useEffect, useState } from 'react';
import api from '../../src/services/axios';
import Card from '../../src/components/Card';

const Cards = () => {

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.get('cards?_limit=30')
    .then((response) => {
      setCards(response.data);
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => console.log('A chamada terminou!'))
  }, [])

  return (
    <div className='container'>
      {cards.map((card) =>
        <Card
          name={card.name}
          attribute={card.attribute}
          cardImage={card.card_images[0].image_url_small}
        />
      )}
    </div>
  );
}

export default App;
