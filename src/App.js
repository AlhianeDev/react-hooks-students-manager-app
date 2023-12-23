import { Routes, Route } from "react-router-dom"; 

import Header from "./components/Header";

import ViewStudents from "./components/ViewStudents";

import UpdateStudent from "./components/UpdateStudent";

import AddStudent from "./components/AddStudent";

import Footer from "./components/Footer";

import React, { useReducer } from "react";

export const StudentsContext = React.createContext();

const initialState = { students: [] };

const reducer = (state, action) => {

  switch (action.type) {

    case "read":
      
      return { students: action.payload }

    case "create":

      return { students: [...state.students, action.payload] }

    case "update":

      let updateindex = state.students.findIndex(
            
        student => student.id === action.payload.id
        
      );

      let updatedStudentsAfterUpdate = 
      
        state.students.splice(updateindex, 1, action.payload.data);

      console.log("updateindex: " + updateindex);

      console.log(updatedStudentsAfterUpdate);

      return { students: updatedStudentsAfterUpdate };

    case "delete":

      let deleteIndex = state.students.findIndex(
            
        student => student.id === action.payload.id
        
      );

      let updatedStudentsAfterDelete = state.students.splice(deleteIndex, 1);

      return { students: updatedStudentsAfterDelete };
  
    default:

      return state;

  }

}

function App() {
 
  const [ studentsState, dispatch ] = useReducer(reducer, initialState);

  return (

    <>

      <Header />

        <Routes>

          <Route 
          
            path="/" 
            
            element={

              <StudentsContext.Provider value={{ dispatch }}>
            
                <AddStudent /> 

              </StudentsContext.Provider>
          
            }
            
            exact 
          
          />

          <Route 
            
            path="/viewStudents" 
            
            element={ 

              <StudentsContext.Provider value={{ studentsState, dispatch }}>
            
                <ViewStudents />

              </StudentsContext.Provider>
          
            }
            
            exact
          
          />

          <Route 
          
            path="/updateStudent/:id" 
            
            element={ 

              <StudentsContext.Provider value={{ studentsState, dispatch }}>
            
                <UpdateStudent />

              </StudentsContext.Provider>
            
            }
            
            exact 
          
          />

        </Routes>

      <Footer />

    </>

  );

}

export default App;
