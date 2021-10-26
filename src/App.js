import './App.css';
import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	};
	console.log(`re-render`);

	return (
		<div className="App">
			<h1>Demo UseState</h1>
			<span>{count}</span>
			<button onClick={handleIncrement}>+</button>
		</div>
	);
}

export default App;
