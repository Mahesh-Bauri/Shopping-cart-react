import React from "react";
import { FooterContainer } from "./footer.styles";

const Footer = () => {
	return (
		<FooterContainer>
			<p
				style={{
					padding: "2rem",
					fontSize: ".8rem",
				}}
			>
				Made with <span>❤</span> by{" "}
				<a
					href="https://www.linkedin.com/in/mahesh-bauri/"
					style={{
						color: "#1e293b",
						fontWeight: "bold",
					}}
				>
					Mahesh Bauri
				</a>
			</p>
		</FooterContainer>
	);
};

export default Footer;
