import React, { useCallback, useContext } from 'react';

import Form from './Form';

import { useParams } from "react-router-dom";

import { StudentsContext } from '../App';

import axios from "axios";

function UpdateStudent() {

    const { id } = useParams();

    const studentsContext = useContext(StudentsContext);

    const student = studentsContext.studentsState.students.filter(student => {

        return student.id === id;

    });

    const putData = useCallback((body) => {

        axios.put(
        
            `http://localhost:3000/students/${ body.id }`, body
            
        ).then(resposne => {
    
            studentsContext.dispatch({ 
                
                type: "update", 
                
                payload: { id: body.id, data: resposne.data } 
            
            });
    
        }).catch(error => {

        console.log(error);

        });

    }, [studentsContext]);

    return (

        <section>

            <div className='container'>

                <Form student={ student[0] } putData={ putData } />

            </div>

        </section>

    );

}

export default UpdateStudent;
