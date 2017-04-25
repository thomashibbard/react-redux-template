import React from 'react';
// import { reactDOM } from 'react-dom';

// import React from 'react';
import styles from '../App.scss';
console.log('styles', Object.keys(styles));
class AudienceList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			n: 1,
		};
		this.add = this.add.bind(this);
	}

	render () {
		let self = this;
		return (
		  <div className="app">
		  	<span>aud list</span>
		    <button className="b" onClick={self.add}>{self.state.n}</button>
		  </div>
		);
	}

	add() {
		let self = this;
		self.setState((prevState, props) => {
		  return {n: prevState.n + 1000};
		});
	}
}

export default AudienceList;
