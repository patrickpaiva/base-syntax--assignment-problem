import React from 'react'

const UserInput = (props) => {
    const style = {
        color: 'green',
        backgroundColor: 'black'
    }
    return (
        <input 
            type="text" 
            onChange={props.changed} 
            value={props.name}
            style={style} 
        />
    )
}

export default UserInput