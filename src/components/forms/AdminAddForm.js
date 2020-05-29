import React,{useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Button from '../buttons/Button';

import Validation from "./Validation";

export default function AdminAdd(props){

    // setting up validation
    const formSchema = yup.object().shape({
        nameFirst: yup
            .string()
            .required("Please enter Admin's first name"),
        nameLast: yup
            .string()
            .required("Please enter Admin's last name"),
        userName: yup
            .string()
            .required("Please enter username for Admin"),
        password: yup
            .string()
            .required("Please enter password for Admin")
            .min(3,"Password should be longer than 3 characters"),
        email: yup
            .string()
            .email("Please enter an email for Admin")
            .required("An email address is required for this Admin")
    });

    // Form state and error state respectively
    const [formState, setFormState] = useState({
        nameFirst:"",
        nameLast:"",
        userName:"",
        password:"",
        email:""
    });

    const [errorState, setErrorState] = useState({
        nameFirst:"",
        nameLast:"",
        userName:"",
        password:"",
        email:""
    });

    const validate = e =>{
        Validation(formSchema,e,errorState,setErrorState);
    }

    const formSubmit = e =>{
        e.preventDefault();
        axios
            .post("")
            .then(response=>{

            })
            .catch(err=>{
                console.log(err);
            })
    };

    const inputChange = e =>{
        e.persist();
        validate(e);
        setFormState({...formState, [e.target.name]:e.target.value });
    };

    return(
        <>

            <form onSubmit={formSubmit} className="signInForm">

                <h2 className="signInTitle">Add Admin</h2>

                <label htmlFor="nameFirst">

                    First Name:

                    <input
                        className="signInInput"
                        type="text"
                        name="nameFirst"
                        id="nameFirst"
                        value={formState.nameFirst}
                        onChange={inputChange}
                    />

                </label>

                {errorState.nameFirst.length > 0 ? (
                    <p className="error">{errorState.nameFirst}</p>
                ) : null}

                <label htmlFor="nameLast">

                    Last Name:

                    <input
                        className="signInInput"
                        type="text"
                        name="nameLast"
                        id="nameLast"
                        value={formState.nameLast}
                        onChange={inputChange}
                    />

                </label>

                {errorState.nameLast.length > 0 ? (
                    <p className="error">{errorState.nameLast}</p>
                ) : null}

                <label htmlFor="userName">

                    Username:

                    <input
                        className="signInInput"
                        type="text"
                        name="userName"
                        id="userName"
                        value={formState.userName}
                        onChange={inputChange}
                    />

                </label>

                {errorState.userName.length > 0 ? (
                    <p className="error">{errorState.userName}</p>
                ) : null}

                <label htmlFor="email">

                    Email:

                    <input
                        className="signInInput"
                        type="email"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={inputChange}
                    />

                </label>

                {errorState.email.length > 0 ? (
                    <p className="error">{errorState.email}</p>
                ) : null}

                <label htmlFor="password">

                    Password:

                    <input
                        className="signInInput"
                        type="password"
                        name="password"
                        id="password"
                        value={formState.password}
                        onChange={inputChange}
                    />

                </label>

                {errorState.password.length > 0 ? (
                    <p className="error">{errorState.password}</p>
                ) : null}

                <Button text="Add" type="submit" margin="10px auto" />

            </form>

        </>
    )

}
