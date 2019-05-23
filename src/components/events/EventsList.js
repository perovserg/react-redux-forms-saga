import React from 'react';
import {connect} from 'react-redux';

import {moduleName, fetchAll} from '../../ducks/events';

class EventsList extends React.Component {

    componentDidMount() {
        this.props.fetchAll();
    }

    render() {
        console.log(this.props.events);
        return (
            <div>

            </div>
        );
    }
}

export default connect(state => ({
    events: state[moduleName].entities
}), {fetchAll})(EventsList);
