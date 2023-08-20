import styled from "styled-components";
import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from "../button/button.style";

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 300px;
	height: 400px;
	max-height: max-content;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	border: 1px solid #d1d5db;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
	filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
		drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));

	// we can write this also
	// button {
	//   margin-top: auto;
	// }

	${BaseButton},
	${GoogleSignInButton},
  ${InvertedButton} {
		margin-top: auto;
	}
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItems = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
`;

// button {
//   margin-top: auto;
// }
