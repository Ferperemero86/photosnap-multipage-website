import React from "react";

import MainMenu from "./main-menu/MainMenu";
// import Header from "./Header";
// import Footer from "./Footer";

import "./layout.scss";

const Layout = ({ children }) => {
	return (
		<div>
			<MainMenu text="test" comeone="yeH" test="eeee" />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
