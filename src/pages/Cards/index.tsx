import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/axios';
import Card from '../../components/Card';
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
  const [page, setPage] = useState<number>(0)
  const [lastElement, setLastElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setPage((currentPage) => currentPage + 1)
        }
      }
    )
  )
  useEffect(() => {
    api.get(`cards?race=${params.type}&_limit=10&_page=${page}`)
      .then((response) => {
        setCards([...cards, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [page]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
  }, [lastElement]);

  return (
    <>
      <h2 className='container title'>{params.type} cards</h2>
      <div className='container cards'>
        {cards.map((card, index) => {
          if (cards.length - 1 === index) {
            return (
              //@ts-ignore
              <div ref={setLastElement} key={card.id}>
                <Card
                  card={card}
                />
              </div>
            )
          }
          return (<Card key={card.id} card={card} />)
        }
        )}
      </div>
    </>
  );
}

export default Cards;
