import { useLocation } from "react-router-dom";
import './style.css';

interface ILocation {
    name_en: string;
    card_images: {
        image_url: string;
    }[]
}

const CardDetails = () => {
    const { state }: any = useLocation();

    const attr = state.attribute ? `${state.attribute.charAt(0).toUpperCase()
        + state.attribute.slice(1).toLowerCase()}` : `Undefined`

    return (
        <div className="container">
            <div className="details-wrapper">
                <img
                    className="image"
                    src={state.card_images[0].image_url}
                    alt={state.name_en}
                />
                <div className="text-div">
                    <h2 className="card-title"> {state.name_en} </h2>
                    <div className="card-details">
                        <span> <b>Card type:</b> {state.type}</span>
                        <span> <b> Attacks stats:</b> {state.atk}</span>
                        <span> <b> Defense stats:</b> {state.def}</span>
                        <span> <b> Race:</b> {state.race}</span>
                        <span> <b> Attribute: </b> {attr}</span>
                    </div>
                        {/* <span><b>Sets</b></span> */}
                    <div className="badge">
                        {state.card_sets.map((set: any) => (
                            <span>{set.set_name}</span>
                        )
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default CardDetails;