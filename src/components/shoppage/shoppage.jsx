import styles from "./shoppage.module.css";
import Navbar from "../navbar/navbar";
import { useData } from "../dataContext";
import Cards from "../cards/Cards";
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const ShopPage = () => {
  const allItems = useData();

  const [myCart, setMyCart] = useState(allItems);
  const addToCart = (item) => {
    item.quantity++;
    console.log(item);
    const newCart = myCart;
    setMyCart([...newCart]);
  };
  const removeFromCart = (item) => {
    if (item.quantity > 0) {
      item.quantity--;
      setMyCart([...myCart, item]);
    }
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
        />
      );
    }
  }

  return (
    <>
      <Navbar openCart={openCart} />
      {allItems !== undefined ? (
        <>
          <h1>Shop Now</h1>

          <div className={styles.wrap}>{allCards}</div>
        </>
      ) : (
        <>Loading...</>
      )}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={closeCart}
        myCart={myCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default ShopPage;

// add allitems !== undefined switch case, like popular
