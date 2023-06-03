import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/AuthContext";

function SingleCartComponent({ item }) {
  const { setTotalCoin, setCartItem, addCartItem } = useContext(Context);
  useEffect(() => {
    const sum = addCartItem.reduce(
      (accumulator, currentValue) => accumulator + currentValue.coin,
      0
    );
    setTotalCoin(sum);
  }, []);
  const removeItem = () => {
    addCartItem.splice(addCartItem.indexOf(item), 1);
    setCartItem([...addCartItem]);
    const sum = addCartItem.reduce(
      (accumulator, currentValue) => accumulator + currentValue.coin,
      0
    );
    setTotalCoin(sum);
  };
  return (
    <>
      <div className="flex justify-between items-center mt-6 pt-6">
        <div className="flex  items-center">
          <img src={item.image} width="60" className="" />

          <div className="flex flex-col ml-3">
            <span className="md:text-md font-medium">{item.title}</span>
          </div>
        </div>

        <div className="grid md:flex justify-center items-center">

        <div className=" flex justify-center items-center space-x-2">
            <span className="text-xl text-green-500">Coin:</span>
            <span className="text-xl pr-6 text-green-500">{item.coin}</span>
          </div>
          <div
            className="pr-6 md:py-2 py-0 cursor-pointer text-red-600"
            onClick={removeItem}
          >
            Remove
          </div>
          
        </div>
      </div>
    </>
  );
}

export default SingleCartComponent;
