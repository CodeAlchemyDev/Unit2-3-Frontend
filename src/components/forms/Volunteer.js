import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import useForm from '../../hooks/useForm';

const Form = styled.form`
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	width: 70%;
	border: 1px solid gray;
	padding: 10px;
	border-radius: 5px;
`;

const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	margin-top: 10px;
`;

const Label = styled.label`
	width: 30%;
	padding: 10px;
`;

const Input = styled.input`width: 60%;`;

const Button = styled.button`
	background: cornflowerblue;
	height: 3em;
	color: black;
	text-transform: none;
	padding: 5px;
	margin: 10px;
`;

const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	margin-top: 10px;
`;

const CheckboxLabel = styled.label`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: baseline;
`;
const VolunteerForm = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	width: 80wv;
	height: 80vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
	transform: translate(-50%, -50%);
	background-color: #fff;
	opacity: 0.9;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
export default function Volunteer() {
	const [ formState, changeHandler ] = useForm({
		name: '',
		email: '',
		phone: '',
		location: '',
		availability: '',
		bio: '',
		terms: false
	});

	//const [ token, setToken ] = useAuthToken();

	//using async
	const submitHandler = async (event) => {
		event.preventDefault();
		console.log(formState);
		const response = await axios.post('https://build-week-school-in-the-cloud.herokuapp.com/api', formState);
		console.log(response.data);
	};

	return (
		<VolunteerForm>
			<h1> Hello Volunteer! Please enter your information</h1>

			<Form onSubmit={submitHandler}>
				<InputWrapper>
					<Label>Name: </Label>
					<Input type="text" name="name" id="name" required value={formState.name} onChange={changeHandler} />
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="email">Email: </Label>
					<Input
						type="email"
						name="email"
						id="email"
						required
						value={formState.email}
						onChange={changeHandler}
					/>
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="phone">Phone: </Label>
					<Input
						type="phone"
						name="phone"
						id="phone"
						required
						value={formState.phone}
						onChange={changeHandler}
					/>
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="Location">Location: </Label>
					<Input
						type="text"
						name="location"
						id="Location"
						required
						value={formState.location}
						onChange={changeHandler}
					/>
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="availability">Availability: </Label>
					<select
						name="availability"
						id="availability"
						onChange={changeHandler}
						value={formState.availability}
					>
						<option value="6am">6:00AM - 9:00AM</option>
						<option value="9am">9:00AM - 12:00PM</option>
						<option value="12pm">12:00PM - 3:00PM</option>
						<option value="3pm">3:00PM - 6:00PM</option>
						<option value="6pm">6:00PM - 9:00PM</option>
					</select>
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="bio">Bio: </Label>
					<Input type="text" name="bio" id="bio" required value={formState.bio} onChange={changeHandler} />
				</InputWrapper>

				<InputWrapper>
					<CheckboxLabel>
						<input
							type="checkbox"
							name="terms"
							id="terms"
							checked={formState.terms}
							onChange={changeHandler}
						/>
						I agree to the terms and conditions.
					</CheckboxLabel>
				</InputWrapper>
				<ButtonWrapper>
					<Button type="submit" value="Submit">
						Submit
					</Button>
					<Button type="cancel" value="cancel">
						Cancel
					</Button>
				</ButtonWrapper>
			</Form>
		</VolunteerForm>
	);
}
