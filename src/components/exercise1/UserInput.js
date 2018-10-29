import React from 'react'
import Classes from '../../styles/App.module.css'

const userInput = (props) => {
    const style = {
        backgroundColor: 'red',
        fontSize:'24px'
    }
    return (
        <input class={Classes.big} style={style} value={props.username} onChange={props.changed} type="text"/>
    )
}

export default userInput
