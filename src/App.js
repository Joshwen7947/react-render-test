import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './App.css';
import React, { useState } from 'react';
import Result from './components/Result';
import CountButton from './components/CountButton';
import DecountButton from './components/DecountButton';
import AddTen from './components/AddTen';
import MinusTen from './components/MinusTen';
function App() {
	const [count, setCount] = useState(0);
	// const Example = () => {
	// 	const [startDate, setStartDate] = useState(new Date());
	// 	return (
	// 		<DatePicker
	// 			selected={startDate}
	// 			onChange={(date) => setStartDate(date)}
	// 		/>
	// 	);
	// };
	return (
		<div>
			<div className="App">
				<h1>Demo UseState</h1>
				<AddTen count={count} setCount={setCount} value={10} />
				<CountButton count={count} setCount={setCount} value={1} />

				<Result count={count} />
				<DecountButton count={count} setCount={setCount} value={-1} />
				<MinusTen count={count} setCount={setCount} value={-10} />
			</div>
			<div>
				<Form id="form">
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Full Name:</Form.Label>
						<Form.Control type="email" placeholder="Enter full name" />
					</Form.Group>
					{/* <DatePicker
						selected={startdate}
						onChange={(date) => setStartDate(date)}
					/> */}

					<Form.Group className="mb-3">
						<Form.Label>Age:</Form.Label>
						<Form.Control type="number" placeholder="Enter age" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Phone Number:</Form.Label>
						<Form.Control type="number" placeholder="Enter phone number" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address:</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Male" />
						<Form.Check type="checkbox" label="Female" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
}

export default App;
