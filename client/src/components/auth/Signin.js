import React from 'react';
import './Signin.css';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

function Signin() {
    return (
        <div className="enclosure"> 
            <form className="form1">
                <h2 className="formheading">Sign-in here!</h2>
                <div className="formele">
                    <input type="email" name="email" autocomplete="off" required/>
                    <label htmlFor="email" className="label-name">
                        <span className="content-name">
                            Email Address
                        </span>
                    </label>
                </div>
                <div className="formele">
                    <input type="password" name="password" autocomplete="off" required/>
                    <label htmlFor="password" className="label-name">
                        <span className="content-name">
                            Password
                        </span>
                    </label>
                </div>
                <button type="submit" className="formbtn1">SUBMIT</button>
            </form>
            <h4 className="NewUser">
                <Link to="/register" className="link">New user? Click here</Link>
            </h4>
        </div>
    )
}

export default Signin
