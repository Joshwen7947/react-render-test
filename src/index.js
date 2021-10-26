import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Welcome(props) {
// 	return <h1>Hello</h1>;
// }

// const element = <Welcome />; // this is called React element
// const name = 'Jon Snow';
// const element = <h1>Hello, {name}</h1>;

const Greeting = () => {
	const name = {
		firstName: 'Josh',
		lastName: 'Wenner',
	};
	return (
		<div>
			<h1>
				{name.firstName} {name.lastName}
			</h1>
		</div>
	);
};
const element = <App />;

ReactDOM.render(element, document.getElementById('root'));
