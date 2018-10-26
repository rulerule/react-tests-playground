import React from 'react'
import '../../styles/exercise1/exercise1.css'

const userOutput = (props) => {
    return (
        <div>
            <p class="exercise1-p"> username: {props.username}</p>
            <p class="exercise1-p"> {props.text} </p>
            <p class="exercise1-p"> {props.text} </p>
        </div>
    )
}

export default userOutput
