import React from 'react';
import { useState } from 'react';
const DecountButton = ({ setCount, count }) => {
	const handleDecrement = () => {
		setCount(count - 1);
	};
	return <button onClick={handleDecrement}>-</button>;
};

export default DecountButton;
