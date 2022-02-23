import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [cards, setCards] = useState([]);
  useEffect(()=>{
    axios({
      method:'get',
      url: 'http://localhost:3333/cards?_limit=30'
    }).then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=> console.log('A chamada terminou!'))
  }, [])

  return (
    <div>
      Hello world
    </div>
  );
}

export default App;
