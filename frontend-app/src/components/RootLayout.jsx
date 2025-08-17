import { Outlet } from "react-router-dom";
import axiosClient from "../api/axiosClient";

import Header from "./Header/Header";
import { useEffect, useState } from "react";
export default function RootLayout() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const exitingIndex = prev.findIndex(
        (i) =>
          i.name === item.name &&
          JSON.stringify(i.values) === JSON.stringify(item.values)
      );

      if (exitingIndex >= 0) {
        const newCart = [...prev];
        newCart[exitingIndex] = {
          ...newCart[exitingIndex],
          quantity: newCart[exitingIndex].quantity + 1,
        };
        return newCart;
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };
  const incrementItem = (item) => handleAddToCart(item);
  const decrementItem = (item) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) =>
          i.name === item.name &&
          JSON.stringify(i.values) === JSON.stringify(item.values)
      );
      if (existingIndex >= 0) {
        const newCart = [...prev];
        const currentQty = newCart[existingIndex].quantity;
        if (currentQty <= 1) {
          newCart.splice(existingIndex, 1);
        } else {
          newCart[existingIndex] = {
            ...newCart[existingIndex],
            quantity: currentQty - 1,
          };
        }
        return newCart;
      }
      return prev;
    });
  };
  const placeOrder = async () => {
    try {
      const orderItems = cartItems.map((item)=>({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        values: item.values,
      }))
      const response = await axiosClient.post("/place-order", orderItems);
      if (response.status === 200) {
        console.log(response.status);
        localStorage.removeItem("cartItems");
        setCartItems([]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="app-conainer">
      <Header
        cartItems={cartItems}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
        placeOrder={placeOrder}
      />
      <main>
        <Outlet
          context={{ handleAddToCart, incrementItem, decrementItem, cartItems }}
        />
      </main>
    </div>
  );
}
