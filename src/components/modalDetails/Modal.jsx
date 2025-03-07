import "./Modal.css";
import PropTypes from "prop-types";

const ModalDetails = ({
  isOpen,
  onClose,
  item,
  addToCart,
  removeFromCart,
  changeQuantity,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <img className="modal-image" src={item.image} />
        <h3>{item.title}</h3>
        {item.description}
        <br />
        <br />${item.price}
        <br />
        <button className="cart-btn" onClick={() => removeFromCart(item)}>
          -
        </button>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => changeQuantity(item, e.target.value)}
        />
        <button className="cart-btn" onClick={() => addToCart(item)}>
          +
        </button>
      </div>
    </div>
  );
};

ModalDetails.propTypes = {
  item: PropTypes.objectOf(PropTypes.string, PropTypes.number),
  isOpen: PropTypes.bool,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  onClose: PropTypes.func,
  changeQuantity: PropTypes.func,
};

export default ModalDetails;
