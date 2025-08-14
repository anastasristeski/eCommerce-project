import { Link } from "react-router-dom";

export default function ProductCard({...props}){
  
    return (
        <Link to={`/${props.name}`}className="product-card">
            <img src={props.image} alt="card picture" className="product-image"></img>
            <p className="product-name">{props.name}</p>
            <p className="product-price">{props.currency}{props.price}</p>
        </Link>
    );
}
