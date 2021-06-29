import React, {useState} from 'react'
import './Signup.css';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import { useHistory } from 'react-router';
import {signup} from '../../actions/auth'
import { useDispatch } from 'react-redux';

const initialState = { username: '', email: '', password: '', confirmPassword: '' };


function Signup() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(signup(formData, history))
        console.log(formData);
    }
    return (
        <div className="enclosure">
            <form className="form1" onSubmit={handleSubmit}>
                <h2 className="formheading">Sign-up here!</h2>
                <div className="formele">
                    <input type="text" name="username" required onChange={handleChange}/>
                    <label htmlFor="username" className="label-name">
                        <span className="content-name">
                            Username
                        </span>
                    </label>
                </div>
                <div className="formele">
                    <input type="email" name="email" required onChange={handleChange}/>
                    <label htmlFor="email" className="label-name">
                        <span className="content-name">
                            Email Address
                        </span>
                    </label>
                </div>
                <div className="formele">
                    <input type="password" name="password" required onChange={handleChange}/>
                    <label htmlFor="password" className="label-name">
                        <span className="content-name">
                            Password
                        </span>
                    </label>
                </div>
                <div className="formele">
                    <input type="password" name="confirmPassword" required onChange={handleChange}/>
                    <label htmlFor="confirmPassword" className="label-name">
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
