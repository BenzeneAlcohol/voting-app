import React from 'react'
import './backdrop.css'
function Backdrop({open, toggler}) {
    return (
        open&&<div className="backdrop" onClick={toggler}>
        </div>
    )
}

export default Backdrop;
