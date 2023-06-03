import { createContext, useEffect, useState } from "react";
import React from "react";
import { NovelsData } from "../data";


export const Context = createContext();

export const AppContext = ({ children }) => {
  
  const [novelsData, setNovelData] = useState(NovelsData);
  const [addCartItem, setCartItem] = useState([]);
  
  const [coins, setCoin] = useState(5);
  const [totalCoin, setTotalCoin] = useState(0);

  const [message, setMessage] = useState();

  useEffect(() => {
    if (novelsData.length === 0) {
      setMessage("No results found!!");
    }
  }, [novelsData]);


  return (
    <Context.Provider
      value={{
        coins,
        setCoin,
        setNovelData,
        novelsData,
        addCartItem,
        setCartItem,
        totalCoin,
        setTotalCoin,
        message,
        setMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

