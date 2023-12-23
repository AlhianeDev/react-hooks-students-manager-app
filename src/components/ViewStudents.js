import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { StudentsContext } from '../App';

import axios from "axios";

function ViewStudents() {

    const bordering = {

        border: "1px solid #ccc",

        borderCollapse: "collapse"

    }

    const tableEl = {

        width: "100%"

    }

    const tdAndThEl = {

        padding: "10px",
        
        letterSpacing: "1px"

    }

    const btnEl = {

        margin: "0 5px",

        padding: "5px 10px",

        backgroundColor: "#ccc",

        borderRadius: "4px",

        border: "none",

        color: "#000",

        cursor: "pointer"

    }

    const pEl = {

        fontSize: "20px",
        
        fontWeight: "600",

        letterSpacing: "1px",

        textAlign: "center"

    }

    const studentsContext = useContext(StudentsContext);

    const deleteStudent = (id) => {

        axios.delete(`http://localhost:3000/students/${ id }`)
      
        .then(resposne => {

            console.log(resposne);
  
            studentsContext.dispatch({ type: "delete", payload: id });
  
        }).catch(error => {
  
          console.log(error);
  
        });

    }

    useEffect(() => {

        axios.get('http://localhost:3000/students')
    
        .then(response => {

            studentsContext.dispatch({ type: "read", payload: response.data });
  
        }).catch(error => {
  
          console.log(error);
  
        });

    }, [studentsContext]);

    return (

        <section>

            <div className='container'>

                { studentsContext.studentsState.students.length ?

                <table style={ { ...bordering, ...tableEl} }>

                    <thead>

                        <tr>

                            <th style={ { ...bordering, ...tdAndThEl } }>First Name</th>

                            <th style={ { ...bordering, ...tdAndThEl } }>Last Name</th>

                            <th style={ { ...bordering, ...tdAndThEl } }>Gender</th>

                            <th style={ { ...bordering, ...tdAndThEl } }>Country</th>

                            <th style={ { ...bordering, ...tdAndThEl } }>Actions</th>

                        </tr>

                    </thead>

                    <tbody>{
                    
                        studentsContext.studentsState.students.map(student => 
                        
                        <tr key={student.id}>

                            <td style={ { ...bordering, ...tdAndThEl } }>
                                
                                { student.firstName }
                                
                            </td>

                            <td style={ { ...bordering, ...tdAndThEl } }>
                                
                                { student.lastName }
                                
                            </td>

                            <td style={ { ...bordering, ...tdAndThEl } }>
                                
                                { student.gender }
                                
                            </td>

                            <td style={ { ...bordering, ...tdAndThEl } }>
                                
                                { student.country }
                                
                            </td>

                            <td style={ 
                                
                                { ...bordering, ...tdAndThEl, textAlign: "center" } 
                                
                            }>

                                <button style={ btnEl }>

                                    <Link 
                                    
                                        to={ `/updateStudent/${ student.id }` }

                                        style={{ color: "black" }}
                                    
                                    > Update </Link>

                                </button>

                                <button 
                                
                                    onClick={ () => deleteStudent(student.id) }

                                    style={ btnEl }
                                    
                                > Delete </button>

                            </td>

                        </tr>)
                        
                    }</tbody>

                </table> : <p style={ pEl }>No Students To Show!</p> }
                
            </div>

        </section>

    );

}

export default ViewStudents;
