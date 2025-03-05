import "./Modal.css";

const ModalDetails = ({ isOpen, onClose, item }) => {
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
      </div>
    </div>
  );
};

export default ModalDetails;
