import React from "react";

import MainMenu from "./MainMenu";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div>
			<MainMenu
				text="test"
				comeone="yeH" />
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
