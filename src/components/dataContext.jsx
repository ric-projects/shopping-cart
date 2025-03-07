import { useState, useEffect, useContext } from "react";
import React from "react";
import PropTypes from "prop-types";

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

        data.forEach((element) => {
          element.quantity = 0;
        });
        console.log(data);
        setAllItems(data);
        // setAllItems(result);
      };
      dataFetch();
    }
  }, [allItems]);

  return <Context.Provider value={allItems}>{children}</Context.Provider>;
};

ItemsDataProvider.propTypes = {
  children: PropTypes.node,
};

export const useData = () => useContext(Context);
