import CartCards from "../CartCards/CartCards";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = ({
  isOpen,
  onClose,
  myCart,
  addToCart,
  removeFromCart,
}) => {
  let totalItems;
  if (myCart !== undefined) {
    totalItems = myCart.reduce(sumItems, 0);
  }

  function sumItems(total, item) {
    return total + item.quantity;
  }

  if (!isOpen) return null;

  function sumCost(total, item) {
    return total + item.quantity * item.price;
  }

  let totalCost;
  if (myCart !== undefined) {
    totalCost = myCart.reduce(sumCost, 0);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={styles.cartModal} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h3>My Cart</h3>
        Items in Cart:{" " + totalItems}
        {totalItems ? (
          myCart.map((item) =>
            item.quantity > 0 ? <CartCards key={item.id} item={item} /> : null
          )
        ) : (
          <></>
        )}
        <br />
        Total: ${totalCost}
        <br />
        <button className="checkoutBtn">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
