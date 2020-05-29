import React from 'react';
import Styled from 'styled-components';

const Form = (props) => {
    const Form = Styled.form`
        width:100%;
        height: 100px;
        display:flex;
        flex-wrap:wrap:
        align-content:center;
        justify-content:center;
        background-color:red;
        position: absolute;
        left:50%;
        top: 50%;
        transform:translate(-50%,-50%);
        `;

    return <Form />
};
export default Form;
