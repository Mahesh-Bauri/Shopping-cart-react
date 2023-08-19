import styled from "styled-components";

export const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	/* border-width: 1px;
	border-color: rgb(229 231 235);
	border-style: solid; */
`;

export const Body = styled.div`
	width: 100%;
	// height: 90px;
	padding: 1.5rem 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	// border: 1px solid black;
	background-color: #f5f5f5;
	// position: absolute;
	z-index: 1;

	h2 {
		font-weight: 400;
		margin: 0 6px 0;
		font-size: 1.2rem;
		color: #4a4a4a;
	}

	p {
		font-weight: lighter;
		font-size: 16px;
	}
`;

export const DirectoryItemContainer = styled.div`
	// width: 200px;
	min-width: 250px;
	height: 320px;
	display: flex;
	flex: 1 1 250px;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	// border: 1px solid black;
	border-width: 1px;
	border-color: rgb(229 231 235);
	border-style: solid;
	margin: 0 7.5px 15px;
	overflow: hidden;
	/* filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.04)); */

	&:hover {
		cursor: pointer;

		& ${BackgroundImage} {
			transform: scale(1.1);
			/* transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95); */
			transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
		}

		& ${Body} {
			opacity: 1;
			/* background-color: #fafafa; */
			background-color: #ffffff;
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}
`;
