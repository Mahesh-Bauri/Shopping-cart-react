import React from "react";

const Footer = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
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
		</div>
	);
};

export default Footer;
