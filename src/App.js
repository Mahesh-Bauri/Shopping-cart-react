import "./components/category-item/category-item.style.scss";
import Home from "./components/routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/Navigation";
import SignIn from "./components/routes/sign-in/SignIn";
import SignUp from "./components/sign-up-form/SignUp";

const Shop = () => {
  return <h1>I am Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
