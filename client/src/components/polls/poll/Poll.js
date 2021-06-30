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
            <div className="btnholder">
                <div className="btn">
                <Link to={`/polls/${poll._id}`} className="link">
                    <button className="btnbtnbtn">
                    VOTE
                    </button>
                    </Link>
                </div>
                <div className="btn">
                <Link to={`/polls/results/${poll._id}`} className="link">
                    <button className="btnbtnbtn">
                    RESULTS
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Poll
