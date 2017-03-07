import React from "react";

const Body = () => {

	const state = {
		arr: [1, 2, 3, 4]
	}
	const list = state.arr.map(item => {
		return (
			<li>body content {item}</li>
		);
	});
	return (
		<main className="body">
			<section className="body__content">
				<ul>{list}</ul>
			</section>
		</main>
	);
};

export default Body;