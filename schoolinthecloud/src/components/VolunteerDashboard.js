import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";


import VolunteerTaskList from './VolunteerTaskList';
import { apiAuth } from '../utils/apiAuth';
import {getVolunteerData} from '../store/actions/volunteerActions';

const VolunteerDBoard = styled.div`
		position: absolute;
		left: 50%;
		top: 50%;
		width: 90vw;
		height: 80vh;
		display: flex;
		flex-wrap: wrap;
		justify-content: begin;
		align-content: left;
		transform: translate(-50%, -50%);
		background-color: #fff;
		padding: 15px;
		border-radius: 10px;
		text-align: center;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	`;

export default function VolunteerDashboard() {
    const dispatch = useDispatch();
    
	useEffect(() => {
        dispatch(getVolunteerData());
    }, []);

	

	const tasks = useSelector(state => state.volunteers.taskList);
	return (
		<VolunteerDBoard>
			<h1> Welcome to Volunteer Dashboard! </h1>
			<VolunteerTaskList tasks={tasks} />
		</VolunteerDBoard>
	);
}
