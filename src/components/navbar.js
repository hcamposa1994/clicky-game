import React from 'react'

const navbar = (props) => {
    const {message, score, topscore} = props
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/">Clicky Game</a>
            <span>{message}</span>
            <span>Score: {score}</span>
            <span>Top Score: {topscore}</span>
        </nav>
    )
}

export default navbar
