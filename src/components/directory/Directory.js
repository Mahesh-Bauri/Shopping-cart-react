import React from "react";
import { DirectoryContainer } from "./directory.styles.js";
import DirectoryItem from "../directory-item/DirectoryItem";

function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem category={category} key={category.id} />;
      })}
    </DirectoryContainer>
  );
}

export default Directory;
