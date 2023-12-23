import React, { useRef } from 'react';

import useInput from '../hooks/useInput';

import { v4 as uuidv4 } from 'uuid';

function Form({ postData, student, putData }) {

    const labelEl = {

        display: "block",

        marginBottom: "10px",

        letterSpacing: "1px"

    }

    const inputEl = {

        width: "100%",

        height: "40px",

        padding: "0 10px",

        border: "1px solid #ccc",

        letterSpacing: "1px",

        outline: "none"

    }

    const submitEl = {

        width: "100%",

        height: "40px",

        border: "none",

        letterSpacing: "1px",

        fontSize: "17px",

        cursor: "pointer"

    }

    const inputRef = useRef();

    const [ firstName, bindFirstName, resetFirstName ] = 
    
        useInput(student ? student.firstName : "");

    const [ lastName, bindLastName, resetLastName ] = 
    
        useInput(student ? student.lastName : "");

    const [ gender, bindGender, resetGender ] = 
    
        useInput(student ? student.gender : "Male");

    const [ country, bindCountry, resetCountry ] = 
     
        useInput(student ? student.country : "Morocco");

    const handleAddStudent = (event) => {

        event.preventDefault();

        if (student === undefined) {

            console.log("create student...");

            postData({ id: uuidv4(), firstName, lastName, gender, country });

        } else {

            const id = student.id;

            putData({ id, firstName, lastName, gender, country });

        }

        resetFirstName("");

        resetLastName("");

        resetGender("Male");

        resetCountry("Morocco");

        if (student === undefined) {

            inputRef.current.focus();

        } else {

            window.location.href = "/viewStudents";

        }

    }

    return (

        <form onSubmit={ handleAddStudent } >

            <div style={{ marginBottom: "20px" }}>

                <label htmlFor='firstName' style={ labelEl }>
                    
                    First Name
                    
                </label>

                <input 

                    type='text'
                    
                    id='firstName'

                    ref={ inputRef }

                    { ...bindFirstName }

                    style={ inputEl }

                />

            </div>

            <div style={{ marginBottom: "20px" }}>

                <label htmlFor='lastName' style={ labelEl }>
                    
                    Last Name
                    
                </label>

                <input 

                    type='text'

                    id='lastName'

                    { ...bindLastName }

                    style={ inputEl }

                />

            </div>

            <div style={{ marginBottom: "20px" }}>

                <label htmlFor='gender' style={ labelEl }>
                    
                    Gender
                    
                </label>

                <select 
                
                    id='gender'

                    { ...bindGender }
                    
                    style={ inputEl }
                
                >

                    <option value={ "Male" }>Male</option>

                    <option value={ "Female" }>Female</option>

                </select>

            </div>

            <div style={{ marginBottom: "20px" }}>

                <label htmlFor='country' style={ labelEl }>
                    
                    Country
                    
                </label>

                <select 
                
                    id='country'

                    { ...bindCountry }
                    
                    style={ inputEl }
                    
                >

                    <option value={ "Morocco" }>Morocco</option>

                    <option value={ "Germany" }>Germany</option>

                    <option value={ "Saudi Arabia" }>Saudi Arabia</option>

                    <option value={ "USA" }>USA</option>

                    <option value={ "Qatar" }>Qatar</option>

                </select>

            </div>

            <button type='submit' style={ submitEl }>
                
                { student === undefined ? "Add Student" : "Update Student" }
                
            </button>

        </form>

    );

}

export default Form;
