import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import BookRegistrationPage from "./pages/bookRegistrationPage/BookRegistrationPage";
import PaymentGateway from "./pages/PaymentGateway/PaymentGateWay";
import { AppContext } from "./Context/AuthContext";
import Layout from "./Components/Layout/Layout";
import SingleBook from "./pages/SingleBook/SingleBook";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/registration/Register";


function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <div className=" max-h-screen overflow-hidden">
          <Routes>
            <Route path="/" exact element={<Login />}></Route>
            <Route path="/main" element={<Layout />}></Route>
            <Route
              path="/bookRegistrationPage"
              element={<BookRegistrationPage />}
            ></Route>
            <Route path="/singleBook/:title" element={<SingleBook />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<PaymentGateway />}></Route>
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
