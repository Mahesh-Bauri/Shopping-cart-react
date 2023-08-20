import styled from "styled-components";

export const CheckoutContainer = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
	position: relative;

	@media screen and (max-width: 992px) {
		width: 100%;
		padding: 0 1rem;
	}
`;

export const CheckoutHeader = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}
`;

export const Total = styled.span`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
`;

export const TestingInfo = styled.p`
	/* margin-top: 5px; */

	/* align-self: flex-start; */

	text-align: left;
	font-size: 0.7rem;
	font-weight: 400;
	/* color: #bdbdbd; */
	color: #959595;
`;

export const Footer = styled(TestingInfo)`
	margin-top: 10px;
	color: #959595;
	position: absolute;
	bottom: 5px;
	b {
		color: #282828;
	}

	span {
		color: #282828;
	}
`;
