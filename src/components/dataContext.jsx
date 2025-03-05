import { useState, useEffect, useContext } from "react";
import React from "react";

const Context = React.createContext();

export const ItemsDataProvider = ({ children }) => {
  const [allItems, setAllItems] = useState(undefined);

  useEffect(() => {
    if (allItems === undefined) {
      const dataFetch = async () => {
        const data = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        }).then((response) => {
          return response.json();
        });

        console.log(data);
        setAllItems(data);
        // setAllItems(result);
      };
      dataFetch();
    }
  }, [allItems]);

  //   const logg = () => console.log(allItems);

  return <Context.Provider value={allItems}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);
