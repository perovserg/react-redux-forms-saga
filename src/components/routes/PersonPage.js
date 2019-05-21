import React from 'react';
import {connect} from 'react-redux';

import NewPersonForm from '../people/NewPersonForm';
import {addPerson} from '../../ducks/people';

class PersonPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Add new person</h2>
                <NewPersonForm onSubmit={this.props.addPerson}/>
            </div>
        );
    }
}

export default connect(null, {addPerson})(PersonPage);
