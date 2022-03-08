import React, { useState } from "react";
import './CustomToggle.css'

const CustomToggle = () => {
    let [state, setState] = useState({ isWhite: true })

    let className = state.isWhite ? 'white-custom-toggle' : 'black-custom-toggle'
    let actualTitle = state.isWhite ? 'White' : 'Black'

    return (
        <button 
            onClick={(e) => setState((actual) => ({ ...actual, isWhite: !actual.isWhite }) )} 
            className={className}
        >{actualTitle}</button>
    )
}

export default CustomToggle