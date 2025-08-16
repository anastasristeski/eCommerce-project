import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
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
   const incrementItem = (item) => handleAddToCart(item);
    const decrementItem =(item)=>{
        setCartItems((prev)=>{
            const existingIndex = prev.findIndex(
                (i)=> 
                    i.name === item.name && JSON.stringify(i.values) === JSON.stringify(item.values)
            );
            if(existingIndex >= 0){
                const newCart = [...prev];
                const currentQty = newCart[existingIndex].quantity;
                if(currentQty <= 1){
                    newCart.splice(existingIndex, 1);
                }else{
                    newCart[existingIndex]={
                        ...newCart[existingIndex],
                        quantity: currentQty -1,
                    };
                }
                return newCart;
            }
            return prev;
        });
    }
    return (
       <div className="app-conainer">
        <Header cartItems = {cartItems} incrementItem={incrementItem} decrementItem={decrementItem}/>
       <main >
         <Outlet context={{handleAddToCart,incrementItem, decrementItem, cartItems}} />
       </main>
        </div>
    );
}