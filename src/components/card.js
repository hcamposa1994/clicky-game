import React from 'react'
import "./css/card.css"

const card =(props) => {
    const {name, image, handleClick, id} = props
    return (
        <div className="card" onClick={() => handleClick(id)}>
            <div className="img-container">
                <img alt={name} src={image} />
            </div>
        </div>
    )
}

export default card
