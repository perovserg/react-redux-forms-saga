import React from 'react';
import {shallow, mount} from 'enzyme';

import events from '../../mocks/conferences';
import {TableEventsList} from './EventsList';
import Loader from '../common/Loader';
import {EventsRecord} from '../../ducks/events';

const testEvents = events.map(event => new EventsRecord({...event, uid: Math.random().toString()}));

it('should render Loader', () => {
    const container = shallow(<TableEventsList loading fetchAll={() => {}}/>);

    expect(container.contains(<Loader/>));
});

it('should render events list', () => {
    const container = shallow(<TableEventsList events = {testEvents} fetchAll={() => {}}/>);

    const rows = container.find('.test--event-list__row');

    expect(rows.length).toEqual(testEvents.length);
});

it('should request fetch data', (done) => {
    shallow(<TableEventsList events = {[]} fetchAll={done}/>);
});

it('should select event', () => {
    let selected = null;
    const selectEvent = (uid) => selected = uid;

    const container = mount(<TableEventsList
        events={testEvents}
        fetchAll={() => {}}
        selectEvent = {selectEvent}
    />);

    container.find('.test--event-list__row').first().simulate('click');

    expect(selected).toEqual(testEvents[0].uid);
});
