import React from 'react';
import { useState } from 'react';

const CountButton = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	};
	return <button onClick={handleIncrement}>+</button>;
};

export default CountButton;
