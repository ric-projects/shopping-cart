import "./Modal.css";

const ModalDetails = ({ isOpen, onClose, item, addToCart, removeFromCart }) => {
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
        {" " + item.quantity + " "}
        <button className="cart-btn" onClick={() => addToCart(item)}>
          +
        </button>
      </div>
    </div>
  );
};

export default ModalDetails;
