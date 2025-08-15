import { useState } from "react";
import cart from "../assets/Vector.png";
import ItemMapper from "./ItemMapper";

export default function Cart({ cartItems }) {
    const [showCart, setShowCart] = useState(false);
const handleShowCart =() =>{
    setShowCart(!showCart);
};
  return (
    <div className="cart-container">
      <div className="header-cart">
        <img onClick ={handleShowCart} src={cart} alt="Cart" />
        <span className="cart-quantity">{cartItems.length}</span>
      </div>
    { showCart && (<div className="cart-items-list">
        <span className="cart-title">My bag, {cartItems.length} items</span>
        {cartItems.map((item, index) => (
                <ItemMapper key={index}item={item} />
        ))}
      </div>)}
    </div>
  );
}
// name: product.name,
//         values: selectedValues,
//         currency: product.currency,
//         price: product.price,
//         image: product.gallery[0]
