import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3333/cards?_limit=30'
    }).then((response) => {
      setCards(response.data)
    })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => console.log('A chamada terminou!'))
  }, [])

  return (
    <div>
      {cards.map((card) => (
        <div>
          {card.name_en}
          <img
            alt={card.name}
            width={30}
            src={card.card_images[0].image_url_small} />
        </div>
      ))}
    </div>
  );
}

export default App;
