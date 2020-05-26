import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

// Styled components
import Button from '../buttons/Buttons';
import Form from '../styled/Form';

export default function Register(props) {
	const [formState, setFormState] = useState({});
	const [errorState, setErrorState] = useState({});

	//Used to test field validation with taken username values from backend.
	const testerFieldForUsernameAvailability = ['thisss', 'isaaa', 'tester'];

	// set up yup validation
	const formSchema_Student = yup.object().shape({
		selector: '',
		userName: '',
		password: '',
		nameFirst: '',
		nameLast: '',
		email: '',
		phone: '',
		address: '',
		time: '',
		terms: false,
	});

	// validation on input change
	const validate = (e) => {
		yup.reach(formSchema_Student, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrorState({
					...errorState,
					[e.target.name]: '',
				});
			})
			.catch((err) => {
				setErrorState({
					...errorState,
					[e.target.name]: err.errors[0],
				});
			});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		// If volunteer is selected post to volunteer api else submit to student api
		formState.selector === 'volunteer'
			? axios
					.post('')
					.then((response) => {
						console.log(response);
					})
					.catch((err) => {
						console.log(err);
					})
			: axios
					.post('')
					.then((response) => {
						console.log(response);
					})
					.catch((err) => {
						console.log(err);
					});
	};

	const inputChange = (e) => {
		e.persist();
		validate(e);
		let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		setFormState({ ...formState, [e.target.name]: value });
	};

	return (
		<Form onSubmit={formSubmit} className="registerForm">
			<h2 className="signInTitle">Register</h2>

			<label htmlFor="selector" className="registerLabel">
				Student or Volunteer?
				<select
					name="selector"
					id="selector"
					onChange={inputChange}
					value={formState.selector}
				>
					<option value="student">Student</option>

					<option value="volunteer">Volunteer</option>
				</select>
			</label>

			<label htmlFor="userName" className="registerLabel">
				<p>Username:</p>

				<input
					className="signInInput"
					type="text"
					name="userName"
					id="userName"
					value={formState.userName}
					onChange={inputChange}
				/>

				{errorState.userName.length > 0 ? (
					<p className="error">{errorState.userName}</p>
				) : null}
			</label>

			<label htmlFor="password" className="registerLabel">
				<p>Password:</p>

				<input
					className="signInInput"
					type="password"
					name="password"
					id="password"
					value={formState.password}
					onChange={inputChange}
				/>

				{errorState.password.length > 0 ? (
					<p className="error">{errorState.password}</p>
				) : null}
			</label>

			<label htmlFor="nameFirst" className="registerLabel">
				<p>First Name:</p>

				<input
					className="signInInput"
					type="text"
					name="nameFirst"
					id="nameFirst"
					value={formState.nameFirst}
					onChange={inputChange}
				/>

				{errorState.nameFirst.length > 0 ? (
					<p className="error">{errorState.nameFirst}</p>
				) : null}
			</label>

			<label htmlFor="nameLast" className="registerLabel">
				<p>Last Name:</p>

				<input
					className="signInInput"
					type="text"
					name="nameLast"
					id="nameLast"
					value={formState.nameLast}
					onChange={inputChange}
				/>

				{errorState.nameLast.length > 0 ? (
					<p className="error">{errorState.nameLast}</p>
				) : null}
			</label>

			<label htmlFor="email" className="registerLabel">
				<p>Email:</p>

				<input
					className="signInInput"
					type="email"
					name="email"
					id="email"
					value={formState.email}
					onChange={inputChange}
				/>

				{errorState.email.length > 0 ? (
					<p className="error">{errorState.email}</p>
				) : null}
			</label>

			<label htmlFor="phone" className="registerLabel">
				<p>Phone Number:</p>

				<input
					className="signInInput"
					type="number"
					name="phone"
					id="phone"
					value={formState.phone}
					onChange={inputChange}
				/>

				{errorState.phone.length > 0 ? (
					<p className="error">{errorState.phone}</p>
				) : null}
			</label>

			<label htmlFor="address" className="registerLabel">
				<p>Address:</p>

				<input
					className="signInInput"
					type="address"
					name="address"
					id="address"
					value={formState.address}
					onChange={inputChange}
				/>

				{errorState.address.length > 0 ? (
					<p className="error">{errorState.address}</p>
				) : null}
			</label>

			<label htmlFor="time" className="registerLabel">
				<p>Time Available:</p>

				<select name="time" id="time" onChange={inputChange} value={formState.time}>
					<option value="6am">6:00AM - 9:00AM</option>

					<option value="9am">9:00AM - 12:00PM</option>

					<option value="12pm">12:00PM - 3:00PM</option>

					<option value="3pm">3:00PM - 6:00PM</option>

					<option value="6pm">6:00PM - 9:00PM</option>
				</select>
			</label>

			<label htmlFor="terms">
				<input
					type="checkbox"
					id="terms"
					name="terms"
					checked={formState.terms}
					onChange={inputChange}
				/>
				Terms Of Service
			</label>

			<label htmlFor="email" className="registerLabel">
				<p>Email:</p>

				<input
					className="signInInput"
					type="email"
					name="email"
					id="email"
					value={formState.email}
					onChange={inputChange}
				/>

				{errorState.email.length > 0 ? (
					<p className="error">{errorState.email}</p>
				) : null}
			</label>

			<label htmlFor="phone" className="registerLabel">
				<p>Phone Number:</p>

				<input
					className="signInInput"
					type="number"
					name="phone"
					id="phone"
					value={formState.phone}
					onChange={inputChange}
				/>

				{errorState.phone.length > 0 ? (
					<p className="error">{errorState.phone}</p>
				) : null}
			</label>

			<label htmlFor="address" className="registerLabel">
				<p>Address:</p>

				<input
					className="signInInput"
					type="address"
					name="address"
					id="address"
					value={formState.address}
					onChange={inputChange}
				/>

				{errorState.address.length > 0 ? (
					<p className="error">{errorState.address}</p>
				) : null}
			</label>

			<label htmlFor="time" className="registerLabel">
				<p>Time Available:</p>

				<select name="time" id="time" onChange={inputChange} value={formState.time}>
					<option value="6am">6:00AM - 9:00AM</option>

					<option value="9am">9:00AM - 12:00PM</option>

					<option value="12pm">12:00PM - 3:00PM</option>

					<option value="3pm">3:00PM - 6:00PM</option>

					<option value="6pm">6:00PM - 9:00PM</option>
				</select>
			</label>

			<label htmlFor="terms">
				<input
					type="checkbox"
					id="terms"
					name="terms"
					checked={formState.terms}
					onChange={inputChange}
				/>
				Terms Of Service
			</label>

			<Button text="Register" type="submit" margin="10px auto" />
		</Form>
	);
}
