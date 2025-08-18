import { useState } from "react";
import cart from "../../assets/Vector.png";
import ItemMapper from "./ItemMapper";

export default function Cart({
  cartItems,
  incrementItem,
  decrementItem,
  placeOrder,
}) {
  console.log("CART ITEM CHECKKK!!!",cartItems);
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
    <div className="cart-container" onClick={handleShowCart} >
      <div className="header-cart">
        <img onClick={handleShowCart} src={cart} alt="Cart" />
        <span className="cart-quantity">{totalQuantity}</span>
      </div>
      {showCart && (
        <div className="backdrop-overlay" />
      )}
      {showCart && (
        <div className="cart-items-list">
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
            <span className="total-price-value">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="place-order-wrap">
            <button onClick={placeOrder} className="place-order-button"
            disabled={cartItems.length === 0}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
