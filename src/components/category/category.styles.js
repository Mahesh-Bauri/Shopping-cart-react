import styled from "styled-components";

export const CategoryContainer = styled.div`
	padding-bottom: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	column-gap: 2rem;
	row-gap: 2rem;
`;

export const CategoryTitle = styled.h2`
	font-size: 38px;
	margin-bottom: 25px;
	text-align: center;
`;
