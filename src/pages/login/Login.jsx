import React, {useState } from "react";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/image2.jpg";
import Instructions from "../../Components/Instructions/Instructions";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  window.onload = () => setTimeout(() => Instructions(), 1000);
  const navigate = useNavigate();
  
  const [passwordShown, setPasswordShown] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: ""
  })
  const inputChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
   
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  
  
    
  const handleLogin = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem('user'));
    if(!state.email || !state.password){
      Swal.fire({
        title: "ERROR",
        text: `Oops! An error has occured. Sorry, please try it again`,
        confirmButtonText: "TRY AGAIN",
        confirmButtonColor: "#FF0000",
        showCloseButton: true,
        allowOutsideClick: false,
      })
    }
    else if(user.email === state.email && user.password !== state.password){
      Swal.fire({
        title: "ERROR",
        text: `Oops! wrong password`,
        confirmButtonText: "TRY Again",
        confirmButtonColor: "#FF0000",
        showCloseButton: true,
        allowOutsideClick: false,
      })

    }else if(user.email === state.email && user.password === state.password){
      localStorage.setItem("isLoggedIn",true);
      navigate('/main');
    } else {
      Swal.fire({
        title: "ERROR",
        text: `Don't have an account, please create account`,
        confirmButtonText: "Signup",
        confirmButtonColor: "#ffa500",
        showCloseButton: true,
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/register');
        }
      });
    }
  }

  return (
    <div>
      <section
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* ------------------------------------------------------login container------------------------------------------------------- */}
        <div className="bg-[#fcc1bd] flex rounded-2xl shadow-2xl  max-w-3xl p-3">
          {/* ----------------------------------------------------image---------------------------------------------------------------------- */}
          <div className="sm:block hidden w-1/2 p-5 mt-16 pr-16 bg-[#fcc1bd]">
            <img src={img2} alt="" className="rounded-2xl w-auto h-auto"></img>
          </div>

          {/* --------------------------------form---------------------------------------------------------------------*/}
          <div className="sm:w-1/2 px-16 py-4 rounded-2xl bg-[#b0d9d3]">
            <h2 className="font-bold text-2xl text-[#0B1354]">Login</h2>
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="email"
                placeholder="Email"
                onChange={inputChangeHandler}
              ></input>
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={inputChangeHandler}
                ></input>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  viewBox="0 0 16 16"
                  onClick={togglePassword}
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>

              <input
                type="submit"
                value="Login"
                className="bg-[#0B1354] rounded-xl py-2 text-white cursor-pointer hover:bg-[#165BAA]"
              />
            </form>
            <p className="text-sm mt-4 text-[#0B1354]">
              Don't have an acount? {" "}
              <span className="text-sm mt-4 text-[#ffa500]">
                <NavLink to="/register">Signup</NavLink>
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;