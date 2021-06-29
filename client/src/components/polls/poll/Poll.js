import React from 'react'
import './Poll.css';
import {
    BrowserRouter as Router,
    Link,
    Route
  } from "react-router-dom";
function Poll({poll}) {
    return (
        <div className="pollContainer">
            <div className="content">
                <div className="questionContainer">
                    <h3>{poll.question}</h3>
                </div>
                <div className="optionContainer">
                    <ul className="ullist">
                        {poll.options.map((option)=><li>{option.option}</li>)}
                    </ul>
                    {/* {poll.options[0].option} */}
                </div>
            </div>
            <div className="btn">
                <button>
                    <Link to={`/polls/${poll._id}`} className="link">
                        VOTE
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Poll
