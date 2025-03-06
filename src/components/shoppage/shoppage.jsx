import styles from "./shoppage.module.css";
import Navbar from "../navbar/navbar";
import { useData } from "../dataContext";
import Cards from "../cards/Cards";
import { useState } from "react";

const ShopPage = () => {
  const allItems = useData();
  const [myCart, setMyCart] = useState([]);

  let allCards = [];
  if (allItems !== undefined) {
    for (let i = 0; i < 20; i++) {
      allCards[i] = <Cards key={i} item={allItems[i]} />;
    }
  }

  return (
    <>
      <Navbar />
      {allItems !== undefined ? (
        <>
          <h1>Shop Now</h1>

          <div className={styles.wrap}>{allCards}</div>
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default ShopPage;

// add allitems !== undefined switch case, like popular
