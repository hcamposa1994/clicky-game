import React from 'react'
import "./css/wrapper.css"
const wrapper = (props) => {
    const {children} = props
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default wrapper
