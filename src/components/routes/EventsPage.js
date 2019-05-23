import React from 'react';

import EventList from '../events/VirtualizedEventsList';

class EventsPage extends React.Component {

    render() {
        return (
            <div>
                <h1>Events Page</h1>
                <EventList/>
            </div>
        );
    }
}

export default EventsPage;
