import React from 'react';

import { Link } from 'react-router-dom';

function Header() {

    const header = {

        padding: "10px 0",

        backgroundColor: "#607274"

    }

    const container = {

        display: "flex",

        justifyContent: "space-between",

        alignItems: "center",

    }

    const brand = {

        fontSize: "20px",

        fontWeight: "600",

        letterSpacing: "1px"

    }

    const navLink = {

        padding: "0 15px",

        letterSpacing: "1px",

        color: "white"

    }

  return (

    <header style={ header }>

        <div className='container' style={ container }>

            <h2 className='brand' style={ brand }>
                
                <Link to='/' style={{ color: "white" }}>
                    
                    Students Manager
                    
                </Link>
                
            </h2>

            <nav>

                <ul style={{ display: "flex" }}>

                    <li><Link to='/' className='nav-link' style={ navLink }>
                        
                        Add Student
                        
                    </Link></li>

                    <li>
                        
                        <Link 
                        
                            to='viewStudents' 
                            
                            className='nav-link' 
                            
                            style={ navLink }
                        
                        >
                            
                            View Students
                            
                        </Link>
                        
                    </li>

                </ul>

            </nav>

        </div>

    </header>

  );

}

export default Header;
