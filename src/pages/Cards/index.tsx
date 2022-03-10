import { useEffect, useState } from 'react';
import api from '../../services/axios';
import Card from '../../components/Card';
import { useParams } from 'react-router-dom';
import './style.scss';

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
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    api.get(`cards?race=${params.type}&_limit=18&_page=${page}`)
      .then((response) => {
        setCards([...cards, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [params.type, page]);

  useEffect(() => {
    const intersectionOberserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setPage((currentValue) => currentValue + 1);
      }
    })
    if (document.querySelector('#sentinel')) {
      intersectionOberserver.observe(document.querySelector('#sentinel')!);
      return () => intersectionOberserver.disconnect()
    }
  }, []);

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
      <div className='button-div'>
        <p id="sentinel" />
      </div>
    </>
  );
}

export default Cards;
