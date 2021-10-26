import React from 'react';
import { useState } from 'react';
const DecountButton = ({ setCount, count, value }) => {
	const handleDecrement = () => {
		setCount(count - 1);
	};
	return <button onClick={handleDecrement}>{value}</button>;
};

export default DecountButton;
