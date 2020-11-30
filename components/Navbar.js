import React from 'react'
 

const Navbar= ({title , icon})=> {
    return (
        <div>
            <h1> <i className={icon}></i>  {title}  </h1>
        </div>
    )
}
 
export default Navbar

