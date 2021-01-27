import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="output">
            <p>Username: {props.name}</p>
            <p>Welcome</p>
        </div>
    )
}

export default UserOutput