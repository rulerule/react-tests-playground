import React from 'react';

const validatorComponent = (props) => {
    let validationMessage = 'Text long enough';
    if(props.textSize < 5) validationMessage = 'Text too short'
    return <div> <p>{validationMessage}</p> </div>
}

export default validatorComponent
