// export default (n = 0) => {

//   const element = document.createElement('pre');
//   const el = document.getElementById('n');
//   setInterval(function() {
//   	element.innerHTML = `<span>${n+=2}</span>`;
//   }, 500);


//   return element;

// };


import React from 'react';
// import { reactDOM } from 'react-dom';

// import React from 'react';
import styles from './App.scss';
console.log('styles', Object.keys(styles));
class App extends React.Component {
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
		    <button className="b" onClick={self.add}>{self.state.n}</button>
		  </div>
		);
	}

	add() {
		let self = this;
		self.setState((prevState, props) => {
		  return {n: prevState.n + 50};
		});
	}
}

export default App;