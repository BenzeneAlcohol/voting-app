import React, {useState, useEffect} from 'react';
import './Signin.css';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import { signin } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const initialState = { email: '', password: ''};

function Signin() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(signin(formData, history))
        console.log(formData);
    }
    useEffect(() => {
        if (localStorage.getItem("authToken")) {
          history.push("/");
        }
      }, [history]);
    return (
        <div className="enclosure"> 
            <form className="form1" onSubmit={handleSubmit}>
                <h2 className="formheading">Sign-in here!</h2>
                <div className="formele">
                    <input type="email" name="email" autocomplete="off" required onChange={handleChange}/>
                    <label htmlFor="email" className="label-name">
                        <span className="content-name">
                            Email Address
                        </span>
                    </label>
                </div>
                <div className="formele">
                    <input type="password" name="password" autocomplete="off" required onChange={handleChange}/>
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
