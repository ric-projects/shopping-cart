import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="links">
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/shoppage">Shop</NavLink>
      </div>
      <a href="">
        <img src="/cart-shopping-svgrepo-com.svg" />
      </a>
    </nav>
  );
};

export default Navbar;
