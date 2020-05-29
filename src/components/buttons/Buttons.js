import React from 'react';
import Styled from 'styled-components';

const Buttoner = Styled.button`
        width: 150px;
        display: inline-block;
        padding: 8px 11px;
        font-size: 1.2rem;
        text-transform: uppercase;
        border: 0;
        border-radius: 5px;
        letter-spacing: 2px;
        outline: none;
        background-color: #00aced;
        background-image: linear-gradient(to right, #4dd0e1, #1ee7e2);
        color: black;
        cursor: pointer;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        margin: 10px auto;

        &:hover{
            background-image: none;
            background-color: #4dd0e1;
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);

        }`;

export default function Button(props) {

	return (
		<Buttoner onClick={props.clickHandler}>{props.text}</Buttoner>
	)
}

