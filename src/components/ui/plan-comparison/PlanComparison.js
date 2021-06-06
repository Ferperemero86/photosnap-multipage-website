import React from "react";
import { useQuery, gql } from "@apollo/client";

const query = gql(`
    query getPlanComparison {
        planComparison {
            title

        }
    }
 `);

const Fields = ({ plans }) => {
	console.log(plans);
	return <p>fields</p>;
};

const PlanComparison = () => {
	const { loading, data } = useQuery(query);
	console.log("DATA", data);
	if (!loading) {
		return (
			<div className="plan-comparison">
				<div className="plan-comparison-heading">
					<p>THE FEATURES</p>
					<p>BASIC</p>
					<p>PRO</p>
					<p>BUSINESS</p>
				</div>
				<Fields />
			</div>
		);
	}

	return null;
};

export default PlanComparison;
