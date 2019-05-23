import firebase from 'firebase';
import {Record, OrderedMap} from 'immutable';
import {all, take, call, put} from 'redux-saga/effects';
import {createSelector} from 'reselect';

import {appName} from '../config';
import {firebaseDataToEntities} from './utils';

export const moduleName = 'events';
const prefix = `${appName}/${moduleName}`;

export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`;
export const FETCH_ALL_SUCCESS = `${prefix}/FETCH_ALL_SUCCESS`;

/*Reducer*/
export const ReducerRecord = Record({
    entities: new OrderedMap({}),
    loading: false,
    loaded: false
});

export const EventsRecord = Record({
    uid: null,
    title: null,
    url: null,
    where: null,
    when: null,
    month: null,
    submissionDeadline: null
});

export default function reducer(state = new ReducerRecord(), action) {

    switch (action.type) {
        case FETCH_ALL_REQUEST:
            return state.set('loading', true);
        case FETCH_ALL_SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('entities', firebaseDataToEntities(action.payload, EventsRecord));
        default:
            return state;
    }
}

/*Selectors*/

export const stateSelector = state => state[moduleName];
export const entitiesSelector = createSelector(stateSelector, state => state.entities);
export const eventListSelector = createSelector(entitiesSelector, entities => (
    entities.valueSeq().toArray()
));


/*Action Creators*/

export function fetchAll() {
    return{
        type: FETCH_ALL_REQUEST
    }
}



/*Sagas*/

export const fetchAllSaga = function* () {
    while (true) {
        yield take(FETCH_ALL_REQUEST);

        const ref = firebase.database().ref('events');

        const data = yield call([ref, ref.once], 'value');

        yield put({
            type: FETCH_ALL_SUCCESS,
            payload: data.val()
        });
    }
};

export function* rootSaga() {
    yield all([
        fetchAllSaga()
    ]);
}
