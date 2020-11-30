import React from 'react'
import {useState} from 'react'

function Register() {

 
     
    return (
        <div className ="form-container">
            <h1>
                User <span className="text-primary"> Register </span>                
            </h1>
            <form   >
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input type="text" name="name"    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email"  />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"   />
                </div>

                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2"  />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block"  />
            </form>
            
        </div>
        )
}

export default Register

