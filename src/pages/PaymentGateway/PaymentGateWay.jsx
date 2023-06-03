import React, { useContext } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router";
import { Context } from "../../Context/AuthContext";
import Swal from "sweetalert2";

function PaymentGateWay() {
  const navigate = useNavigate();
  const {
    setCoin,
    setTotalCoin,
    setCartItem,
    addCartItem,
    novelsData,
    setNovelData,
  } = useContext(Context);

  const checkOut = () => {
    Swal.fire(`Your Novel is booked! You will be notified the futher details in your registered email!!`, "", "success").then((result) =>
      navigate("/main")
    );
    addCartItem?.map((item) => {
      novelsData.splice(novelsData.indexOf(item), 1);
      setNovelData([...novelsData]);
    });

    setCartItem([]);
    setCoin(0);
    setTotalCoin(0);
  };
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center m-5">
        <div className=" p-5 bg-gray-800 rounded overflow-visible max-w-fit ">
          <span className="text-xl font-medium text-gray-100 block pb-3">
            Card Details
          </span>

          <span className="text-xs text-gray-400 ">Card Type</span>

          <div className="overflow-visible flex justify-between items-center mt-2">
            <div className="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10">
              <span className="italic text-lg font-medium text-gray-200 underline">
                VISA
              </span>

              <div className="flex justify-between items-center pt-4 ">
                <span className="text-xs text-gray-200 font-medium">****</span>
                <span className="text-xs text-gray-200 font-medium">****</span>
                <span className="text-xs text-gray-200 font-medium">****</span>
                <span className="text-xs text-gray-200 font-medium">****</span>
              </div>

              <div className="flex justify-between items-center mt-3">
                <span className="text-xs  text-gray-200">
                  Giga Tamarashvili
                </span>
                <span className="text-xs  text-gray-200">12/18</span>
              </div>
            </div>

            <div className="flex justify-center  items-center flex-col">
              <img
                src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                width="40"
                className="relative right-5"
              />
              <span className="text-xs font-medium text-gray-200 bottom-2 relative right-5">
                mastercard.
              </span>
            </div>
          </div>

          <div className="flex justify-center flex-col pt-3">
            <label className="text-xs text-gray-400 ">Name on Card</label>
            <input
              type="text"
              className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
              placeholder="Giga Tamarashvili"
            />
          </div>

          <div className="flex justify-center flex-col pt-3">
            <label className="text-xs text-gray-400 ">Card Number</label>
            <input
              type="text"
              className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
              placeholder="****     ****      ****      ****"
            />
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
            <div className="col-span-2 ">
              <label className="text-xs text-gray-400">Expiration Date</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                  placeholder="mm"
                />
                <input
                  type="text"
                  className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                  placeholder="yyyy"
                />
              </div>
            </div>

            <div className="">
              <label className="text-xs text-gray-400">CVV</label>
              <input
                type="text"
                className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                placeholder="XXX"
              />
            </div>
          </div>

          <button
            className="h-12 w-full bg-orange-400 rounded focus:outline-none text-white hover:bg-orange-500"
            onClick={checkOut}
          >
            Check Out
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentGateWay;
