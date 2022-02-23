import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './pages/Cards';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
