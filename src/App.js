import "./components/category-item/category-item.style.scss";
import Home from "./components/routes/home/Home";
import { Routes, Outlet, Route } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am Navigation</h1>
      </div>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return <h1>I am Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
