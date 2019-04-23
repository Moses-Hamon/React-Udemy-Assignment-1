import React, {Component} from 'react';
import './CharComponent.css';

class CharComponent extends Component {

    render (){
        return(
            <div className='CharComponent' onClick={this.props.onClick}>
                {this.props.char}
            </div>
        );
    }
}

export default CharComponent;