import React from "react";
import Directory from "../../directory/Directory";
import categories from "../../category-item/categories";

function Home() {
  return <Directory categories={categories} />;
}

export default Home;
