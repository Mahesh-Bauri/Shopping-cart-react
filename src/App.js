import "./components/category-item/category-item.style.scss";
import CategoryItem from "./components/category-item/CategoryItem";
import categories from "./components/category-item/categories";
import Directory from "./components/directory/Directory";

const App = () => {
  return <Directory categories={categories} />;
};

export default App;
