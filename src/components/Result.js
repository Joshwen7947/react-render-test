import React from 'react';
import { useState } from 'react';

export const Result = () => {
	const [count, setCount] = useState(0);
	const Result = ({ count }) => {
		return <span>{count}</span>;
	};
};
export default Result;
