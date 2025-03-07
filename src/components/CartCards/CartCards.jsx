import "./CartCards.css";
import PropTypes from "prop-types";

const CartCards = ({ item }) => {
  return (
    <>
      <div className="cartItem">
        <img src={item.image} />
        <div>Item: {item.title}</div>
        <br />
        <div>Quantity: {item.quantity}</div>
      </div>
    </>
  );
};

CartCards.propTypes = {
  item: PropTypes.objectOf(PropTypes.string, PropTypes.number),
};

export default CartCards;
