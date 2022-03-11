import { useLocation } from "react-router-dom";
import './style.css';

interface ILocation {
    name_en: string;
    card_images: {
        image_url: string;
    }[]
}

const StoresDict = {
    "amazon_price": "Amazon",
    "ebay_price": "Ebay",
    "cardmarket_price": "CardMarket",
    "tcgplayer_price": "TGC Player",
    "coolstuffinc_price": "Cool Stuff Inc."
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
                    <span className="card-subtitle"> [{state.race}/{state.type}]</span>
                    <span className="card-subtitle">{attr}</span>
                    <div className="card-details">
                        <span> <b> Level {state.level} </b></span>
                        <span>{state.desc}</span>
                        <hr />
                        <span> <b> Attacks stats:</b> {state.atk}</span>
                        <span> <b> Defense stats:</b> {state.def}</span>
                        <hr />
                        {Object.keys(StoresDict).map((key) => (
                            state.card_prices.map((price: any) => (
                                <div className='price'>
                                    <a className='priceLink'
                                        // @ts-ignore
                                        href={`https://www.${StoresDict[key]}.com`}
                                        target={'blank'}>
                                        {/* @ts-ignore */}
                                        {StoresDict[key]}:
                                    </a>
                                    <p>${price[key]}</p>
                                </div>
                            ))
                        ))}
                    </div>
                    {/* <span><b>Sets</b></span> */}
                    <div className="footer">
                        {state.card_sets.map((set: any) =>
                            <span className="badge" key={set.set_code}>{set.set_name}</span>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CardDetails;