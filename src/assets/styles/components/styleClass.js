import React from 'react';
import Styled from 'styled-components';

/*
Class using Styled-Components library so we can quickly implement
components. Default values will be implemented on any values without a
prop passed in. Passing in a prop will overwrite the default values found here.
example use:

*import class

*call class with const
const style = new Styler();

*use class method to create button
<style.Button
    text="Get Started"
    bgColor ="#00aced"
    margin ="10px auto"
/>
*/

export default class Styler{

    Form(props){
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

    }

    Link(props){

        const Link = Styled.a`
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
        `;

        return <Link onClick={props.clickHandler}>{props.text}</Link>
    }

    Text(props){

        const Text = Styled.div`            
            height:${props.height};
            width: ${props.width};
            font-size: ${props.fontSize};
            letter-spacing: ${props.letterSpacing};
            line-height: ${props.lineHeight};
            color: ${props.color};
            margin: ${props.margin};
            font-family: ${props.fontFamily};   
            font-weight: ${props.fontWeight};
            text-align:${props.textAlign};
        `;

        return <Text>{props.text}</Text>
    }

    Image(props){

        const Image = Styled.div`
        background-image: url(${props.url});
        height: 40px;
        width: 50px;
        background-repeat: no-repeat;
        background-size: contain;
        background-fit: center center;
        margin-right: 10px;
        margin-top: 5px;        
        height: ${props.height};
        width: ${props.width};
        margin: ${props.margin};        
    `;

        return <Image />
    }

    Button(props){

        const Button = Styled.button`
            width: 150px;
            display: inline-block;
            padding: 8px 11px;
            font-size: 1.2rem;
            text-transform: uppercase;
            border: 0;
            border-radius: 5px;
            letter-spacing: 2px;
            outline: none;
            background-color: #4dd0e1;
            background-image: linear-gradient(to right, #4dd0e1, #1ee7e2);
            color: black;
            cursor: pointer;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);            
            margin: ${props.margin};
            width:${props.width};
            height:${props.height};
            font-size:${props.fontSize};
            background-color: ${props.bgColor};
            bgImage: ${props.bgImage};
            color: ${props.color};
            
            &:hover{
                background-image: none;
                background-color: #4dd0e1;
                box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
            
            }       
        `;

        return <Button
            onClick ={props.clickHandler}
            type = {props.type}
        >
            {props.text}

        </Button>
    }

}