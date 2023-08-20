import styled from "styled-components";
export const ProductCardContainer = styled.div`
	/* width: 90%; */
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* min-height: 250px; */
	max-height: max-content;
	height: 300px;
	/* padding: 10px; */
	align-items: center;
	position: relative;
	border: 1px solid #e5e7eb;
	border-top: none;
	overflow: hidden;
	border-radius: 0.125rem; /* 2px */
	background-color: #f9fafb;

	img {
		width: 100%;
		height: 60%;
		object-fit: cover;
		border-top-left-radius: 2px;
		border-top-right-radius: 2px;
		/* margin-bottom: 5px; */
	}

	button {
		width: 100%;
		/* opacity: 0.7; */
		position: absolute;
		bottom: 0;
		/* top: 250px; */
		/* color: #6b7280; */
		color: #1f2937;

		/* display: none; */
		/* background-color: #111827; */
		/* font-weight: 600; */
		border: none;
		border-top: 1px solid #e5e7eb;
		/* color: #f9fafb; */
		/* box-shadow: -2px 2px 8px 0.1px #373737; */
		/* transform: translateY(50px); */
		/* font-weight: 600; */
		font-size: 0.9rem;
		background-color: #f3f4f6;
	}

	&:hover {
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		background-color: #fafafa;
		img {
			opacity: 1;
			transform: scale(1.02);
			/* transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95); */
			transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
			/* filter: blur(1.3px); */
		}

		button {
			display: flex;
			/* background-color: #fafafa; */
			color: #f9fafb;
			background-color: #111827;
			&:hover {
				/* border: 1px solid #d1d5db; */
				background-color: #111827;
				box-shadow: none;
			}
		}
	}
`;

export const Footer = styled.div`
	width: 100%;
	height: 10%;
	/* margin-top: 0.5rem; */
	/* margin: 1rem; */
	padding: 1.5rem 1rem;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const Name = styled.span`
	width: 90%;
	/* margin-bottom: 15px; */
	color: #6b7280;
	font-size: 0.9rem;
	font-weight: 500;
`;

export const Price = styled.span`
	width: 15%;
	text-align: right;
	color: #374151;
	font-weight: 600;
	font-size: 0.9rem;
`;
