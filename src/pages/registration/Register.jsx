import React, { useState } from "react";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/image2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
      })
      const inputChangeHandler = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
      }

    const handleRegister = (e) => {
        e.preventDefault();
        if(state.name && state.email && state.password){
            localStorage.setItem('user',JSON.stringify(state));
            Swal.fire(
                "Lets Start!!!",
                "You are successfully create your account!",
                "success"
              );
            navigate('/');
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
            <h2 className="font-bold text-2xl text-[#0B1354]">Sign up</h2>
            <p className="text-sm mt-4 text-[#0B1354]">
              Already have an acount{" "}
              <span className="text-sm mt-4 text-[#ffa500]">
                <NavLink to="/">Login</NavLink>
              </span>
            </p>
            <form className="flex flex-col gap-4" onSubmit={handleRegister}>
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="name"
                placeholder="user name"
                onChange={inputChangeHandler}
              ></input>
              <input
                className="p-2 rounded-xl border"
                type="text"
                name="email"
                placeholder="Email"
                onChange={inputChangeHandler}
              ></input>

              <input
                className="p-2 rounded-xl border"
                type="password"
                name="password"
                placeholder="Password"
                onChange={inputChangeHandler}
              ></input>

              <input
                type="submit"
                value="Signup"
                className="bg-[#0B1354] rounded-xl py-2 text-white cursor-pointer hover:bg-[#165BAA]"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
