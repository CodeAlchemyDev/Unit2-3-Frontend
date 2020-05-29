import React from 'react';
import * as yup from "yup";

export default function validate(formSchema, e, errorState, setErrorState){
    yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid=>{
            setErrorState({
                ...errorState,[e.target.name]:""
            });
        })
        .catch(err=>{
            setErrorState({
                ...errorState,[e.target.name]:err.errors[0]
            });
        })
}