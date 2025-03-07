import { useData } from "../dataContext";
import styles from "./shoppage.module.css";
import Navbar from "../navbar/navbar";
import Cards from "../cards/Cards";
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const ShopPage = () => {
  const allItems = useData();

  const [myCart, setMyCart] = useState(allItems);
  const addToCart = (item) => {
    item.quantity++;
    // console.log(item);
    const newCart = myCart;
    setMyCart([...newCart]);
  };
  const removeFromCart = (item) => {
    if (item.quantity > 0) {
      item.quantity--;
      setMyCart([...myCart]);
    }
  };
  const changeQuantity = (item, value) => {
    if (value > 0) item.quantity = Number(value);
    setMyCart([...myCart]);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  let allCards = [];
  if (allItems !== undefined) {
    for (let i = 0; i < 20; i++) {
      allCards[i] = (
        <Cards
          key={i}
          item={allItems[i]}
          myCart={myCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          changeQuantity={changeQuantity}
        />
      );
    }
  }

  return (
    <>
      {allItems !== undefined ? (
        <Navbar openCart={openCart} />
      ) : (
        <>Loading...</>
      )}
      {allItems !== undefined ? (
        <>
          <h1>Shop Now</h1>

          <div className={styles.wrap}>{allCards}</div>
        </>
      ) : (
        <>Loading...</>
      )}
      {allItems !== undefined ? (
        <ShoppingCart
          isOpen={isCartOpen}
          onClose={closeCart}
          myCart={myCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default ShopPage;

// add allitems !== undefined switch case, like popular
