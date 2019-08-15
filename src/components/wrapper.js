import React from 'react'

const wrapper = (props) => {
    const {children} = props
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default wrapper
