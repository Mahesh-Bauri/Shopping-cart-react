import styled from "styled-components";

export const AuthenticationContainer = styled.div`
	display: flex;
	max-width: 900px;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 30px auto;

	background-color: #f9fafb;
	border: 1px solid #e5e7eb;
	padding: 2rem;

	@media screen and (max-width: 1005px) {
		flex-direction: column;
		align-items: center;
		width: max-content;
	}
`;
