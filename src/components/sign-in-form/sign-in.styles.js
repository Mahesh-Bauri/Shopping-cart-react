import styled from "styled-components";

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
	margin-bottom: 2rem;
	h2 {
		margin: 10px 0;
	}

	.guest:hover {
		cursor: pointer;
		color: #5f5f5f;
		text-decoration: underline;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
