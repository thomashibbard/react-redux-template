import React from 'react';
import { createStore } from 'redux';

class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nums: [1, 2, 3, 4]
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(evt) {
		evt.currentTarget.style.color = 'red';
	}
	getList() {
		return this.state.nums.map((item, index) => {
			debugger;
			return (
				<li key={index.toString()}
						onClick={this.handleClick}>{item}</li>
			);
		});
	}
	render() {
		return (
			<main className="body">
				<section className="body__content">
					<ul>{this.getList()}</ul>
				</section>
			</main>
		);
	}
}

export default Body;
