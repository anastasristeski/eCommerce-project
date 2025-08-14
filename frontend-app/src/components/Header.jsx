import {  NavLink } from "react-router-dom";
import logo from "../assets/VSF.png";
import cart from "../assets/Vector.png";
export default function Header() {

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
        <div className="header-logo">  <img src={logo} alt="Logo" /></div>
        <div className="header-cart"><img src={cart} alt="Cart" /></div>
      </div>
    </header>
  );
}
