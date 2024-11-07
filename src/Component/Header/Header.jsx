import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header-Wrapper">
        <div className="nav-Wrapper">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/product">Product</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        <button>Sign-In</button>
    </div>
  );
}

export default Header;
