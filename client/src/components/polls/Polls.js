import React from 'react'
import './Polls.css';
import { useSelector } from 'react-redux';
import Poll from './poll/Poll'
function Polls() {
    const polls = useSelector((state)=>state.polls)
    console.log(polls);
    return (
        <div className="Pollscontainer">
            {polls.map((poll)=><Poll poll={poll}/>)}
        </div>
    )
}

export default Polls
