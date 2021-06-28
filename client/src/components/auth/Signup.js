import React from 'react'
import './Signup.css';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
function Signup() {
    return (
        <div className="enclosure">
            <form className="form1">
                <h2 className="formheading">Sign-up here!</h2>
                <div className="formele">
                    <input type="text" name="username" autocomplete="off" required/>
                    <label htmlFor="username" className="label-name">
                        <span className="content-name">
                            Username
                        </span>
                    </label>
                </div>
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
                <div className="formele">
                    <input type="password" name="confirmpass" autocomplete="off" required/>
                    <label htmlFor="confirmpass" className="label-name">
                        <span className="content-name">
                            Confirm Password
                        </span>
                    </label>
                </div>
                <button type="submit" className="formbtn1">SUBMIT</button>
            </form>
            <h4 className="OldUser">
                <Link to="/login" className="link">Already registered? Click here</Link>
            </h4>
        </div>
    )
}

export default Signup
