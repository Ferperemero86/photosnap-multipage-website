import React from "react";
import Layout from "../components/layout/Layout";
import { useSelector } from "react-redux";

const Home = () => {
	console.log(useSelector(state => {
		return state;
	}));

	return (
		<Layout>
			<h1>Home</h1>
		</Layout>
	);
};

export default Home;
