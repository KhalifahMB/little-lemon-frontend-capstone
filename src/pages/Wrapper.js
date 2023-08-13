import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Wrapper = ({ children }) => {
	return (
		<>
			<Nav />
			<Outlet />

			<Footer />
		</>
	);
};

export default Wrapper;
