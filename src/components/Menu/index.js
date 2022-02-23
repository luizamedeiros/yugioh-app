import { Link } from 'react-router-dom';
import './style.css';

const Menu = () => {
    return (
        <div className="menu">
            <h1 className="menu-title">Epic Library</h1>
            <ul className="menu-list">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/deck-builder">
                    <li>Deck Builder</li>
                </Link>
                <Link to="/my-decks">
                    <li>My Decks</li>
                </Link>
            </ul>
        </div>
    );
}

export default Menu;
