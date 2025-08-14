import { Link } from "react-router-dom";
import logo from "../assets/Common.png";

export default function ProductCard({ ...props }) {
  return (
    <Link to={`/${props.name}`} className="product-card">
      <img src={props.image} alt="card picture" className="product-image"></img>
      <button className="cart-icon">
        <img src={logo} alt="cartLogo" />
      </button>
      <p className="product-name">{props.name}</p>
      <p className="product-price">
        {props.currency}
        {props.price}
      </p>
    </Link>
  );
}
