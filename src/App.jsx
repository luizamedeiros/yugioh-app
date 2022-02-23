import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cards from './pages/Cards';
import MyDecks from './pages/MyDecks';
import DeckBuilder from './pages/DeckBuilder';
import CardDetails from './pages/CardDetails';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cards" element={<Cards />}/>
        <Route path="/my-decks" element={<MyDecks />}/>
        <Route path="/card-details" element={<CardDetails />}/>
        <Route path="/deck-builder" element={<DeckBuilder />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
