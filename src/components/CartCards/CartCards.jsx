import "./CartCards.css";

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

export default CartCards;
