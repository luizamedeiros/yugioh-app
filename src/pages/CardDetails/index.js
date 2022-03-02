import { useLocation } from "react-router-dom";
import './style.scss';

const CardDetails = () => {
    const location = useLocation();
    console.log(location)
    const attr = location.state.attribute?  `${location.state.attribute.charAt(0).toUpperCase()
            + location.state.attribute.slice(1).toLowerCase()}`: `Undefined`
    return (
        <>
            <h2 className="container details"> {location.state.name_en} </h2>
            <div className="details-container">
                <img
                    className="details-container item"
                    src={location.state.card_images[0].image_url}
                    alt={location.state.name_en}
                />
                <div className="details-container item text">
                    <span> <b>Card type:</b> {location.state.type}</span>
                    <span> <b> Attacks stats:</b> {location.state.atk}</span>
                    <span> <b> Defense stats:</b> {location.state.def}</span>
                    <span> <b> Race:</b> {location.state.race}</span>
                    <span> <b> Attribute: </b> {attr}</span>
                </div>
            </div>
        </>
    );
}

export default CardDetails;