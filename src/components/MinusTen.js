import React from 'react';
import { useState } from 'react';
const MinusTen = ({ setCount, count, value }) => {
	// const [count, setCount] = useState(0);
	const handleDecrement = () => {
		setCount(count - 10);
	};
	return <button onClick={handleDecrement}>{value}</button>;
};

export default MinusTen;
