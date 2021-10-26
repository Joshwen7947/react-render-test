import React from 'react';
import { useState } from 'react';
const AddTen = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 10);
	};
	return <button onClick={handleIncrement}>+10</button>;
};

export default AddTen;
