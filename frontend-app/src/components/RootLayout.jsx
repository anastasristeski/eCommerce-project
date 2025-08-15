import { Outlet } from "react-router-dom";

import Header from "./Header";
import { useState } from "react";
export default function RootLayout(){
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item)=>{
    setCartItems((prev)=>{
      const exitingIndex = prev.findIndex(
        (i) => i.name === item.name && JSON.stringify(i.values) === JSON.stringify(item.values)
      );

      if(exitingIndex >=0 ){
        const newCart = [...prev];
        newCart[exitingIndex] ={
          ...newCart[exitingIndex],
          quantity: newCart[exitingIndex].quantity+1
        };
        return newCart;
      }else{
        return [...prev, {...item, quantity: 1}];
      }

    });
  };
    return (
       <div className="app-conainer">
        <Header cartItems = {cartItems} />
       <main >
         <Outlet context={{handleAddToCart, cartItems}} />
       </main>
        </div>
    );
}