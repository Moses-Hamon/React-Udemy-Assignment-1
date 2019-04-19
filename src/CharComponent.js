import React, {Component} from 'react';
import './CharComponent.css';

class CharComponent extends Component {

    render (){
        return(
            <div className='CharComponent'>
                {this.props.char}
            </div>
        );
    }
}

export default CharComponent;