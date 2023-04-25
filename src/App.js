// import "./components/directory-item/category-item.style.scss";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { lazy, Suspense } from "react";
import { useEffect } from "react";
import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/spinner/Spinner";

const Home = lazy(() => import("./components/routes/home/Home"));
const Navigation = lazy(() =>
  import("./components/routes/navigation/Navigation")
);
const Authentication = lazy(() =>
  import("./components/routes/authentication/Authentication")
);
const Shop = lazy(() => import("./components/routes/shop/Shop"));
const Checkout = lazy(() => import("./components/checkout/Checkout"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
