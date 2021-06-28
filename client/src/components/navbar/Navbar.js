import React from 'react'
import './Navbar.css';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
function Navbar({toggler}) {
    return (
        <div className="Navbar">
            <div className="Navbar__logo">
                <h2>Voting App</h2>
                <Link to="/"><i className="fas fa-poll fa-5x"></i></Link>
            </div>
            <ul className="Navbar__links">
                {/* <li>
                    <h3>
                        <a href="/create">Create Poll</a>
                    </h3>   
                </li> */}
                <li>
                    <span className="auth__link">
                        <h3>
                        {/* <a href="/login">Authentication</a> */}
                        <Link to="/login">Authentication</Link>
                        </h3>
                    </span>
                </li>
            </ul>
            <div className="Mobile-Menu" onClick={toggler} >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Navbar;
