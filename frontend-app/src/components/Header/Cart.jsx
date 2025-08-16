import { useState } from "react";
import cart from "../../assets/Vector.png";
import ItemMapper from "./ItemMapper";

export default function Cart({ cartItems, incrementItem, decrementItem }) {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const totalQuantity = cartItems.reduce(
  (acc, item) => acc + (item.quantity || 1),
  0
);

  return (
    <div className="cart-container">
      <div className="header-cart">
        <img onClick={handleShowCart} src={cart} alt="Cart" />
        <span className="cart-quantity">{totalQuantity}</span>
      </div>
      {showCart && (
        <div className="backdrop-overlay" onClick={handleShowCart} />
      )}
      {showCart && (
        <div className="cart-items-list">
          {/* <span className="cart-title">My bag, {cartItems.length} items</span> */}
          <p className="cart-title">
            <span className="bold">My bag</span>
            <span className="normal">, {totalQuantity} items</span>
          </p>
          {cartItems.map((item, index) => (
            <ItemMapper
              key={index}
              item={item}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
            />
          ))}
          <div className="total-price-row">
            <span className="total-price-label">TOTAL</span>
            <span className="total-price-value">${totalPrice}</span>
          </div>
          <button className="place-order-button">PLACE ORDER</button>
        </div>
      )}
    </div>
  );
}
