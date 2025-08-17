import {  NavLink } from "react-router-dom";
import logo from "../../assets/VSF.png";
import Cart from "./Cart";

export default function Header({cartItems, incrementItem, decrementItem, placeOrder}) {

  return (
    <header className="header">
      <div className="header-elements">
        <ul className="header-left">
          <NavLink to="/products/clothes"  className={({ isActive }) => isActive ? "active-link" : ""}>
            <li>CLOTHES</li>
          </NavLink>
          <NavLink to="/products/tech"  className={({ isActive }) => isActive ? "active-link" : ""}>
            <li>TECH</li>
          </NavLink>
          <NavLink to="/"  className={({ isActive }) => isActive ? "active-link" : ""}>
            <li>ALL</li>
          </NavLink>
        </ul>
        <NavLink to="/"><div className="header-logo">  <img src={logo} alt="Logo" /></div></NavLink>
        <Cart cartItems={cartItems} incrementItem={incrementItem} decrementItem={decrementItem} placeOrder={placeOrder}/>
      </div>
    </header>
  );
}
