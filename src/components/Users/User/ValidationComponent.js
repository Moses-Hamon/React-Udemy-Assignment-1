import React from 'react';

const ValidationComponent = (props) => {
    const length = props.inputLength;
    let msg = 'Input is ';
    //
    length <= 5 ? msg = msg+'too Short' : msg = msg+'Good'

    return <p>{msg}</p>
}

export default ValidationComponent;