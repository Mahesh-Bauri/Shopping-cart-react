import "./components/category-item/category-item.style.scss";
import CategoryItem from "./components/category-item/CategoryItem";
import categories from "./components/category-item/categories";

const App = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default App;
