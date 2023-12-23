import React, { useCallback, useContext } from 'react';

import Form from './Form';

import axios from "axios";

import { StudentsContext } from '../App';

function AddStudent() {

    const studentsContext = useContext(StudentsContext);

    const postData = useCallback((body) => {

        axios.post("http://localhost:3000/students", body)

        .then(resposne => {
  
            studentsContext.dispatch({ type: "create", payload: resposne.data });
  
        }).catch(error => {
  
          console.log(error);
  
        });
  

    }, [studentsContext]);

    return (

        <section>

            <div className='container'>

                <Form postData={ postData } />

            </div>

        </section>

    );

}

export default AddStudent;
