import './App.css';
import { useState } from 'react';
import Result from './components/Result';
import CountButton from './components/CountButton';
import DecountButton from './components/DecountButton';
import AddTen from './components/AddTen';
import MinusTen from './components/MinusTen';
function App() {
	const [count, setCount] = useState(0);

	console.log(`re-render`);

	return (
		<div className="App">
			<h1>Demo UseState</h1>
			<Result />
			<CountButton />
			<AddTen />
			<DecountButton />
			<MinusTen />
		</div>
	);
}

export default App;
