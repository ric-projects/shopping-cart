import { useState } from "react";
import "./Cards.css";
import ModalDetails from "../modalDetails/Modal";

const Cards = ({ item, myCart, addToCart, removeFromCart, changeQuantity }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="card">
      <img src={item.image} />
      <h6>{item.title}</h6>${item.price}
      <br />
      {addToCart !== undefined ? (
        <button id="openModal" onClick={openModal}>
          Details
        </button>
      ) : (
        <></>
      )}
      <ModalDetails
        isOpen={isModalOpen}
        onClose={closeModal}
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        changeQuantity={changeQuantity}
      />
    </div>
  );
};

export default Cards;
