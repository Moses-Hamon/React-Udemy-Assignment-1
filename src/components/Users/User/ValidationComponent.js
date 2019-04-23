import React from 'react';




const ValidationComponent = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        width: '10%',
        textAlign: 'center',
        margin: '16px auto',
    }


    const length = props.inputLength;
    let msg = 'Input is ';
    let checkLength = (length <= 5);

    checkLength ? msg = msg+'too Short' : msg = msg+'Good';
    checkLength ? style.backgroundColor = 'red' : style.backgroundColor = 'green';
    
    return <p style={style}>{msg}</p>
}

export default ValidationComponent;