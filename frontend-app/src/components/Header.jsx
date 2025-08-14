import { Link } from "react-router-dom";
import logo from "../assets/VSF.png";
import cart from "../assets/Vector.png";
export default function Header() {
  return (
    <header className="header">
      <div className="header-elements">
        <ul className="header-left">
          <Link to="/products/clothes">
            <li>CLOTHES</li>
          </Link>
          <Link to="/products/tech">
            <li>TECH</li>
          </Link>
          <Link to="/">
            <li>ALL</li>
          </Link>
        </ul>
        <div className="header-logo">  <img src={logo} alt="Logo" /></div>
        <div className="header-cart"><img src={cart} alt="Cart" /></div>
      </div>
    </header>
  );
}
