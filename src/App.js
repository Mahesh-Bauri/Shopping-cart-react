import "./components/category-item/category-item.style.scss";
import Home from "./components/routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/Navigation";
import Authentication from "./components/routes/authentication/Authentication";
import { useContext } from "react";
import { UserContext } from "./contexts/UserProvider";
const Shop = () => {
  const value = useContext(UserContext);

  return <h1>I am Shop {value.msg}</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
