import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: 'red',
        fontSize:'24px'
    }
    return (
        <input style={style} value={props.username} onChange={props.changed} type="text"/>
    )
}

export default userInput
