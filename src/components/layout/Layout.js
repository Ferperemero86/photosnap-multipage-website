import React from "react";

import MainMenu from "./main-menu/MainMenu";
import Footer from "../layout/footer/Footer";

import "./layout.scss";

const Layout = ({ children }) => {
	return (
		<div className="wrapper">
			<MainMenu />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
