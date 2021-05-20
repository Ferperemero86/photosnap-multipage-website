import React from "react";

import Layout from "../components/layout/Layout";

import { useSelector, useDispatch } from "react-redux";
import { showMobileMenu } from "../state/actions/display-actions";
import { asyncDispatch } from "../state/actions";

const Home = () => {
	const state = useSelector((state) => {
		return state;
	});

	const dispatch = useDispatch();

	const handleVegToggle = () => asyncDispatch(dispatch, showMobileMenu);

	console.log(state);

	return (
		<Layout>
			<h1>Home</h1>
			<button onClick={handleVegToggle()}>Try me</button>
		</Layout>
	);
};

export default Home;
