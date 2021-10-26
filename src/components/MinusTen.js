import React from 'react';
import { useState } from 'react';
const MinusTen = () => {
	const [count, setCount] = useState(0);
	const handleDecrement = () => {
		setCount(count - 10);
	};
	return <button onClick={handleDecrement}>-10</button>;
};

export default MinusTen;
