import React from 'react'
import './Polls.css';
import { useSelector } from 'react-redux';
import Poll from './poll/Poll'
function Polls() {
    const polls = useSelector((state)=>state.polls)
    console.log(polls);
    return (
        <div>
            This is Polls component.
        </div>
    )
}

export default Polls
