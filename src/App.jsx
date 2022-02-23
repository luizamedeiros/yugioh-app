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
      setCards(response.data);
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => console.log('A chamada terminou!'))
  }, [])

  return (
    <div className='container'>
      {cards.map((card) => (
        <div className='card-item'>
          <img
            width={30}
            alt={card.name_en}
            src={card.card_images[0].image_url_small} 
          />
          <span>{card.name_en}</span>
          <span>Attribute: {card.attribute}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
