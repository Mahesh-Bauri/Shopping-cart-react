import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	margin-bottom: 30px;

	/* border: 1px solid; */
	/* border-color: rgb(203 213 225); */
	padding: 2rem;
	padding-top: 0;
	margin: 2rem 0;
	background-color: #f9fafb;

	h2 {
		display: flex;
		justify-content: space-between;
		align-items: center;

		span {
			font-size: 20px;
			font-weight: 500;

			&:hover {
				color: #2c2c2c;
				border-bottom: 3px solid black;
			}
		}
	}
`;

export const Title = styled.a`
	padding: 0.7rem 0;
	font-size: 28px;
	font-weight: 600;
	/* margin-bottom: 25px; */
	cursor: pointer;

	&:hover {
		color: #2c2c2c;
		/* border-bottom: 3px solid black; */
	}
`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	column-gap: 2rem;
	row-gap: 2rem;
`;
