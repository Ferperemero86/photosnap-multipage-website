import React from "react";

import MainMenu from "./MainMenu";
import Header from "./Header";
import Footer from "./Footer";

import "./layout.scss";

const Layout = ({ children }) => {
	return (
		<div>
			<MainMenu text="test" comeone="yeH" test="eeee" />
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
