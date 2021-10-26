import React from 'react';
import { useState } from 'react';

const CountButton = ({ setCount, count, value }) => {
	// const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	};
	return <button onClick={handleIncrement}>{value}</button>;
};

export default CountButton;
