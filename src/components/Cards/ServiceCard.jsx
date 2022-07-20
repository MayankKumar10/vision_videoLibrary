import React from "react";

export const ServiceCard = (props) => {
	return (
		<>
			<div className="sm-card-container sm-card-shadow padding-normal flex-row-center AlertError imgTransition">
				<img
					className="sm-card-icons"
					src={props}
					alt="quality"
				/>
				<h3 className="sm-card-text padding-small-left1">
					Provide Best Quality
				</h3>
			</div>
		</>
	);
};
