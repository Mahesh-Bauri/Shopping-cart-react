// import "./components/directory-item/category-item.style.scss";
import Home from "./components/routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/Navigation";
import Authentication from "./components/routes/authentication/Authentication";
import Shop from "./components/routes/shop/Shop";
import Checkout from "./components/checkout/Checkout";
import { useDispatch } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
