import styles from "./ShoppingCart.module.css";

const ShoppingCart = ({
  isOpen,
  onClose,
  myCart,
  addToCart,
  removeFromCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={styles.cartModal} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h3>My Cart</h3>
        Items in Cart:{" " + myCart.length}
      </div>
    </div>
  );
};

export default ShoppingCart;
