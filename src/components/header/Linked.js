import React from 'react';
import Styled from 'styled-components';

const Linked = (props) => {
	const Linked = Styled.li`
        a {
            display: flex;
            flex-wrap: wrap;
            height: 15px;
            transition: .25s all ease-in-out;
            height: ${props.height};
            letter-spacing: 2px;
            letter-spacing: ${props.letterSpacing};
            font-family: ${props.fontFamily};
            font-size: 15px;
            font-size: ${props.fontSize};
            margin: ${props.margin};
            color: ${props.color};
                &:hover{
                cursor:pointer;
                transition: .25s all ease-in-out;
                color: black;
                color: ${props.hoverColor};
                }
        }`;

	return <Linked>{props.text}</Linked>;
};

export default Linked;
