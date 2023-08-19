import React from "react";
import { DirectoryContainer } from "./directory.styles.js";
import DirectoryItem from "../directory-item/DirectoryItem";

const categories = [
	{
		id: 1,
		title: "Hats",
		imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
		route: "shop/hats",
	},
	{
		id: 2,
		title: "Jackets",
		imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		route: "shop/jackets",
	},
	{
		id: 3,
		title: "Sneakers",
		imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		route: "shop/sneakers",
	},
	{
		id: 4,
		title: "Womens",
		imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
		route: "shop/womens",
	},
	{
		id: 5,
		title: "Mens",
		imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
		route: "shop/mens",
	},
	{
		id: 6,
		title: "Sneakers",
		imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		route: "shop/sneakers",
	},
	{
		id: 7,
		title: "Hats",
		imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
		route: "shop/hats",
	},
	{
		id: 8,
		title: "Jackets",
		imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		route: "shop/jackets",
	},
];

function Directory() {
	return (
		<DirectoryContainer>
			{categories.map((category) => {
				return <DirectoryItem category={category} key={category.id} />;
			})}
		</DirectoryContainer>
	);
}

export default Directory;
