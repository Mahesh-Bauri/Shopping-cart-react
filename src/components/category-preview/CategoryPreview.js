import React from "react";
import { Link } from "react-router-dom";
import ProductsCard from "../product-card/ProductsCard";
import {
	CategoryPreviewContainer,
	Title,
	Preview,
} from "./category-preview.styles.js";

function CategoryPreview({ title, products }) {
	return (
		<CategoryPreviewContainer>
			<h2>
				<Title to={title}>{title.toUpperCase()}</Title>
				<Link to={title}>
					<span>see all</span>
				</Link>
			</h2>
			<Preview>
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => {
						return <ProductsCard key={product.id} product={product} />;
					})}
			</Preview>
		</CategoryPreviewContainer>
	);
}

export default CategoryPreview;
