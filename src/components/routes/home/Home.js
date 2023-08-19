import React from "react";
import Directory from "../../directory/Directory";
import { Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";

function Home() {
	return (
		<>
			<div>
				<Directory />
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export default Home;
