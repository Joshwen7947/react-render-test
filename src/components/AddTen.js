import React from 'react';
import { useState } from 'react';
const AddTen = ({ setCount, count, value }) => {
	// const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 10);
	};
	return <button onClick={handleIncrement}>+{value}</button>;
};

export default AddTen;
