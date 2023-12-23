import React from 'react';

function Footer() {

    const footer = {

        padding: "10px 0",

        backgroundColor: "#607274"

    }

    const copyrights = {

        textAlign: "center",

        letterSpacing: "1px",

        color: "white"

    }

    return (

        <footer style={ footer }>

            <div className='container'>

                <p style={ copyrights }>
                    
                    ©StudentsManager 2023. All Rights Reserved.
                    
                </p>

            </div>

        </footer>

    );

}

export default Footer;
