import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './modules/Header.jsx';
import Body from './modules/Body.jsx';
import Footer from './modules/Footer.jsx';


const App = () => {
	return (
		<div className="app">
			<Header />
			<Body />
			<Footer />
		</div>
	);
}


const rootNode = document.querySelector('#app-root');

ReactDOM.render(<App />, rootNode);
