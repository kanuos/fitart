import React from 'react'

const Lazy = () => {
    return (
        <div className="lazy-load">
            <h1 className="lazy-heading">
                Fit-Art
            </h1>
            <br/>
            <span className="lazy-loading">
                Loading.. Please wait.
            </span>
            <span className="lazy-icon"></span>
        </div>
    )
}

export default Lazy
