import React from 'react'
import './Navbar.css'
function Navbar({toggler}) {
    return (
        <div className="Navbar">
            <div className="Navbar__logo">
                <h2>Voting App</h2>
                <a href="/"><i class="fas fa-poll fa-5x"></i></a>
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
                        <a href="/signin">Authentication</a>
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
