import { Link } from 'react-router-dom';
import './style.css';

const Menu = () => {
    return (
        <div className="menu">
            <Link to="/">
                <h1 className="menu-title">Epic Library</h1>
            </Link>
            <ul className="menu-list">
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
