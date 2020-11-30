import React , { useState } from 'react'

const Login = () => {
   

  

    return (
        <div className ="form-container">
            <h1>
                User <span className="text-primary"> Login </span>                
            </h1>
            <form  >
                
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email"    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  />
                </div>

                
                <input type="submit" value="Login" className="btn btn-primary btn-block"  />
            </form>
            
        </div>
    )
}

export default Login;
