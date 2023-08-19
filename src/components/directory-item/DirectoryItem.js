import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import {
	DirectoryItemContainer,
	BackgroundImage,
	Body,
} from "./directory-item.styles";

function DirectoryItem({ category }) {
	const [loading, setLoading] = useState(true);
	const { title, imageUrl, route } = category;
	const navigate = useNavigate();
	const onNavigateHandler = () => navigate(route);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	});
	return (
		<DirectoryItemContainer onClick={onNavigateHandler}>
			{loading ? (
				<Skeleton height={244} width={1000} />
			) : (
				<BackgroundImage imageUrl={imageUrl} />
			)}
			<Body>
				{loading ? <Skeleton height={30} width={180} /> : <h2>{title}</h2>}

				{/* <p>Shop Now</p> */}
			</Body>
		</DirectoryItemContainer>
	);
}

export default DirectoryItem;
