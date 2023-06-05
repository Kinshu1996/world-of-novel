import React, { useEffect, useState, useContext } from "react";
import coin from "./pic/coins.png";
import cart from "./pic/cart.svg";
import { useNavigate } from "react-router";
import { Context } from "../../Context/AuthContext";
import { NovelsData } from "../../data";
import { Link } from "react-router-dom";
import logo from "./pic/wonlogo-1.png";

function NavBar() {
  
    const { coins, setNovelData, addCartItem,setMessage } = useContext(Context);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const [mainpage, setMainPage] = useState(false);

  const uploadBooks = () => {
    navigate("/bookRegistrationPage");
  };

  useEffect(() => {
    if (window.location.pathname === "/main") {
      setMainPage(true);
    }
  }, [window.location.pathname]);


  useEffect(() => {
    searchData();
  }, [q]);

  const searchData = () => {
    const searchResult = NovelsData.filter(
      (novel) =>
        novel.title.toLowerCase().includes(q.toLowerCase()) ||
        novel.author.toLowerCase().includes(q.toLowerCase())
    );
    if(searchResult.length!==0){
      setMessage('')
    }
    setNovelData(searchResult);
  };
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate('/');
  }
  return (
    <div className="navBar flex justify-between items-center bg-white shadow-2xl px-4">
      

      <div className="logo text-center flex md:order-1">

        <div className="cursor-pointer">
          <Link to="/main">
            <img className="w-48" src={logo} alt=""></img>
          </Link>
        </div>
        <div className="sell w-fit md:w-auto md:px-8 md:m-3 md:p-0.5 text-white md:font-bold md:text-xl md:border absolute md:items-center md:bg-[#ffa500] md:rounded-xl hover:scale-105  md:static bg-[#ffa500] inset-0 md:flex md:mx-4 md:space-x-2 -translate-x-96 md:translate-x-0 cursor-pointer">
          <button className="SItem " onClick={uploadBooks}>
            Upload +
          </button>

        </div>
        < div className="sell md:hidden w-auto px-4 m-3 py-0.5 text-white font-bold text-xl border items-center rounded-xl hover:scale-105 bg-[#ffa500] cursor-pointer">
          <button className="SItem " onClick={uploadBooks}>+</button>
        </div>
        {
          mainpage && <div className="w-fit mt-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="black"
              className="h-7 w-6 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        }
      </div>
      {mainpage && (
        <div className="hidden w-fit mt-4 md:order-2 md:block">
          <div className="mb-3 xl:w-96">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 block w-[2%] min-w-0 flex-auto rounded border border-solid border-white bg-gray-300 bg-clip-padding px-3 py-1.5 text-base font-normal text-black outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-black focus:shadow-te-primary focus:outline-none"
                placeholder={`Search`}
                aria-label="Search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-describedby="button-addon2"

              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="black"
                className="h-7 w-6 mt-1 ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      <div className="cart text-center md:order-3 flex inset-12">
        <img className="w-6 h-6 mr-1 cursor-pointer" src={coin} alt=""></img>
        <p className="text-black">{coins}</p>
        <Link to={"/cart"}>
          <img
            className="w-6 h-6 ml-4 mr-1 cursor-pointer text-white"
            src={cart}
            alt=""
          ></img>
        </Link>
        {addCartItem.length !== 0 && (
          <p className="text-xs bg-slate-300 w-4 h-4 rounded-full">
            {addCartItem.length}
          </p>
        )}
        <button onClick={handleLogout} className="text-black underline">
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;