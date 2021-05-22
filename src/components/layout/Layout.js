import React from "react";

import MainMenu from "./main-menu/MainMenu";
import Header from "./header/Header";

import "./layout.scss";

const Layout = ({ children }) => {
	return (
		<div className="wrapper">
			<MainMenu />
			<Header />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
