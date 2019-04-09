import React, {Component} from 'react';
class UserOutput extends Component {
    state = {
        content: [
            'That rewound dauntless pugnaciously much petted while towards before sheep far and dolphin but the mongoose a' +
            'cassowary much secure the haphazard crane sourly luxuriant crud out more orca while and ouch against after.',

            'Therefore some far derisively glanced darn far filled tentatively far distant realistically far much knitted' +
            'this illustratively tactfully hello revealed the quit this broke considering much more and one lobster reckless.'
        ]
    }
    
    render(){
        return (
            <div>
                <h4>User is {this.props.userName}</h4>
                <p>
                {this.state.content[0]}
                </p>
                <p>
                {this.state.content[1]}
                </p>
            </div>
        );
    }
}

export default UserOutput;