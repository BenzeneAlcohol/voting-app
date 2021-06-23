import React from 'react'
import './sidedrawer.css'
function Sidedrawer({open}) {
    const sidedrawertrue = ["sidedrawer"];
    if(open){
        sidedrawertrue.push("anim");
    }
    return (
        <div className={sidedrawertrue.join(" ")}>
            
        </div>
    )
}

export default Sidedrawer