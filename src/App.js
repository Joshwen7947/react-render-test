import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { useState } from 'react';
import Result from './components/Result';
import CountButton from './components/CountButton';
import DecountButton from './components/DecountButton';
import AddTen from './components/AddTen';
import MinusTen from './components/MinusTen';
function App() {
	const [count, setCount] = useState(0);
	// const [email, setEmail] = useState('');
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// };
	// const handleOnChange = (event) => {
	// 	console.log(`event`, event);
	// };
	// console.log(`re-render`);

	return (
		<div className="App">
			<h1>Demo UseState</h1>
			<AddTen count={count} setCount={setCount} value={10} />
			<CountButton count={count} setCount={setCount} value={1} />

			<Result count={count} />
			<DecountButton count={count} setCount={setCount} value={-1} />
			<MinusTen count={count} setCount={setCount} value={-10} />
		</div>
	);
}

export default App;
{
	/* <div style={{ marginTop: '5rem', fontSize: '30px' }}>
				<form
					action="" //onSubmit={handleSubmit}//
				>
					<label for="email">Email:</label>
					<input type="text" id="email" />
					<br />
					<label for="password">Password:</label>
					<input type="password" id="password" />
					<br />
					<button
						type="submit"
						value="submit" //onClick={handleSubmit}
					></button>
				</form> 
			</div> */
}
