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
