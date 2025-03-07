import { NavLink } from "react-router-dom";
import "./navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ openCart }) => {
  return (
    <nav>
      <div className="links">
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/shoppage">Shop</NavLink>
      </div>
      {openCart === undefined ? (
        <></>
      ) : (
        <a className="cartBtn" onClick={() => openCart()}>
          <img src="/cart-shopping-svgrepo-com.svg" />
        </a>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  openCart: PropTypes.func,
};

export default Navbar;
