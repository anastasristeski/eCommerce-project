import { useState } from "react";
import cart from "../../assets/Vector.png";
import ItemMapper from "./ItemMapper";
import { AnimatePresence, motion } from "framer-motion";

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
  const containerVariants={
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },

    },
  };
  const itemVariants={
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y:0},
    
  }

  return (
    <div className="cart-container" onClick={handleShowCart} >
      <div className="header-cart">
        <img onClick={handleShowCart} src={cart} alt="Cart" />
        <span className="cart-quantity">{totalQuantity}</span>
      </div>
      {showCart && (
        <div className="backdrop-overlay" />
      )}
      <AnimatePresence>
      {showCart && (
        <motion.div 
        className="cart-items-list"
        initial ={{opacity: 0, x: 200}}
        animate = {{opacity: 1, x: 0}}
        exit ={{opacity: 0, x:200}}
        transition ={{duration: 0.3}}
        >
          <p className="cart-title">
            <span className="bold">My bag</span>
            <span className="normal">, {totalQuantity} items</span>
          </p>
          <motion.div
          variants={containerVariants}
          initial="hidden"
          animate= "show"
          >
          {cartItems.map((item, index) => (
            <motion.div
            key={index}
            variants= {itemVariants}
            >

            <ItemMapper
              item={item}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
            /></motion.div>
          ))}
          </motion.div>
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
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
