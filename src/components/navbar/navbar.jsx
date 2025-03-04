import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/shoppage">Shop</NavLink>
    </nav>
  );
};

export default Navbar;
